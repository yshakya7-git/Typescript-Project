import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const FetchData = () => {
    return useQuery(['products'], () => {
        return axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                    return res.data;
                })
    });
};


