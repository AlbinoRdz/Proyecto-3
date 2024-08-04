import React, { useEffect, useState } from "react";
import axios from 'axios';

const useAxiosHook = (url) => {
    const [getAxios, setGetAxios] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(url);
                setGetAxios(res.data);
            } catch (err) {
                console.error(err);
            }
        };

        getProducts(); 
    }, [url]);

    return { getAxios }; 
};

export default useAxiosHook;
