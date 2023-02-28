import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const useAxios = (url)=> {
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const cancelTokenSource = axios.CancelToken.source();

    const fetchData = useCallback(()=> {
        axios
            .get(url, {CancelToken: cancelTokenSource.token})
            .then((res)=> {
                setData(res.data);
                setLoading(false);
            })
            .catch((err)=> {
                if(axios.isCancel(err)) {
                    console.log('request cancelled');
                }
                setError(err.message);
                setLoading(false);
            })
    }, [url]);

    useEffect(()=> {
        fetchData();
        return ()=>cancelTokenSource.cancel();
    }, [url]);

    return {
        data, loading, error
    }
}
export default useAxios;