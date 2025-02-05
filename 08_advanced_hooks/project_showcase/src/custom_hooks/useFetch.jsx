import { useEffect, useState } from 'react'

const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;

        (async () => {
            console.log("I am re-invoked: ", url, options)
            try {
                setLoading(true);
                const resp = await fetch(url, options);
                if (!resp.ok) {
                    throw new Error(`HTTP error! Status: ${resp.statusText}`);
                }
                const data = await resp.json();
                if (isMounted) {
                    setData(data);
                    setLoading(false);
                }
            } catch (error) {
                if (isMounted) {
                    setError(error.message);
                    setLoading(false);
                }
            }
        })();
        return () => {
            isMounted = false
        }
    //   fetchData();
    }, [url, options]);


  return { data, loading, error }
}

export default useFetch;