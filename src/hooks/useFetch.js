import { useState, useEffect } from 'react';

export default function useFetch() {

  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  useEffect(() => {

    async function customFetch() {

      await setIsLoading(true);
      await setError(null);
      await setResponse(null);
  
      try {
        console.log('fetching...');

        console.log('request:', request);

        let res = await fetch(request.url, {
          method: request.method,
          body: JSON.stringify(request.body) || null,
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          mode: 'cors'
        });

        console.log('response:', res);

        await setIsLoading(false);
    
        if (res.status >= 300) {          
          await setError(res);
          return;
        } else {

          await setResponse(await res.json());
        }
  

      } catch(e) {
        console.log('fetch error:', e);
        await setError(e);
      }
  
    }

    if (request) customFetch();

  }, [request]);

  return {
    setRequest,
    isLoading,
    error,
    response
  }

}