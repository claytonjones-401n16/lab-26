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
          headers: { 'Accept': 'application/json', 'Content-Type': 'application: json' },
          mode: 'cors'
        });
        console.log(request.method,'res:', res);

        await setIsLoading(false);
    
        if (res.status >= 300) {
          
          console.log('ERROR?');
          await setError(res);
          return;
        }
  
        await setResponse(await res.json());

      } catch(e) {
        console.log(e);
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