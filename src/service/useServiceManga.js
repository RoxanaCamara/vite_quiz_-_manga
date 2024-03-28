import axios from 'axios';
import {
    CREDENTIALS,
    VITE_CONNECTION_TOKEN,
    VITE_URL_MANGA
} from '../helper/constantes';

export const useServiceManga = () => {
    const login = async () => {
        return await axios({
            method: 'POST',
            url: VITE_CONNECTION_TOKEN,
            data: CREDENTIALS,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };

    const instance = axios.create({
        baseURL: VITE_URL_MANGA,
        timeout: 1000,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const getManga = async (title) => {
        return await instance
            .get('/manga', {
                params: {
                    title
                }
            })
            .then((e) => {
                return e;
            })
            .catch((error) => error);
    };

    const getChapter = async (id) => {
        return await instance
            .get(`/manga${id}/feed?includeFuturePublishAt=1`, {
                params: {
                    id
                }
            })
            .then((e) => {
                return e;
            })
            .catch((error) => error);
    };

    return { getManga, login, getChapter };
};
