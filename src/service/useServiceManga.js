import axios from 'axios';
import { VITE_API_KEY_MANGA } from '../helper/constantes';

export const useServiceManga = () => {
    const instance = axios.create({
        baseURL: VITE_API_KEY_MANGA,
        timeout: 1000,
        headers: { 'X-Custom-Header': 'foobar' }
    });

    const getManga = (title) => {
        return instance.get('/manga', {
            params: {
                title
            }
        });
    };

    return { getManga };
};
