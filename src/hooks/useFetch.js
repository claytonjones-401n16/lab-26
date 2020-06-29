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
        let res = await fetch(request.url, {
          method: request.method,
          body: request.body || null,
          headers: { 'Content-Type': 'application/json; charset=utf-8', 'Accept': 'application/json' },
          mode: 'cors'
        });

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