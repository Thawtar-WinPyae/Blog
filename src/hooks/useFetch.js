import { useEffect, useState } from "react";

function useFetch(url){
    let [data,setData] = useState(null);
    let [loading,setLoading] = useState(null);
    let [error,setError] = useState(null);

    useEffect(() => {
        let controller = new AbortController();
        let signal = controller.signal;

            setLoading(true);
            fetch(url , {
                signal
            })
            .then(res => {
                if(!res.ok) {
                    throw Error('Something Went wrong');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
                setLoading(false);
            })
            .catch(e => {
                setError(e.message);
            })
        //cleanup function
        return () => {
            controller.abort();
        }
    },[url]);
    return { data, loading, error};
}
export default useFetch;