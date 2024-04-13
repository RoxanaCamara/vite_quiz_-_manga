import axios from 'axios';
import {
    CREDENTIALS,
    VITE_CONNECTION_TOKEN,
    VITE_URL_MANGA
} from '../helper/constantes';

export const useServiceManga = () => {
    const postLogin = async () => {
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

    const getMangaId = async (id) => {
        return await instance
            .get('/manga', {
                params: {
                    id
                }
            })
            .then((e) => {
                return e;
            })
            .catch((error) => error);
    };

    /**Obtengo informacion de los mangas segun el title */
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

    /**Obtengo informacion de los mangas segun el title */
    const getMangaConMasRanting = async () => {
        const order = {
            rating: 'desc',
            followedCount: 'desc'
        };
        const finalOrderQuery = {};

        // { "order[rating]": "desc", "order[followedCount]": "desc" }
        for (const [key, value] of Object.entries(order)) {
            finalOrderQuery[`order[${key}]`] = value;
        }
        return await instance
            .get('/manga', {
                params: finalOrderQuery
            })
            .then((e) => {
                return e;
            })
            .catch((error) => error);
    };

    /* Obtengo los id de los capitulos de un id manga */
    const getIdsChapters = async (id) => {
        return await instance
            .get(`/manga/${id}/feed`)
            .then((resp) => {
                return resp.data.data.map((chapter) => chapter.id);
            })
            .catch((error) => error);
    };

    /* Obtengo los id de la pagina */
    const getIdsPages = async (chapterID) => {
        return await instance
            .get(`/at-home/server/${chapterID}/`)
            .then((resp) => {
                return resp;
            })
            .catch((error) => error);
    };

    /* Obtengo la imagen del servidor */
    const getPageImage = async (host, chapterHash, page) => {
        return await instance
            .get(`${host}/data/${chapterHash}/${page}`)
            .then((e) => {
                return e;
            })
            .catch((error) => error);
    };

    const getCoverImageManga = async (idCover) => {
        return await instance
            .get(`https://uploads.mangadex.org/cover/${idCover}`)
            .then((e) => {
                return e;
            })
            .catch((error) => error);
    };

    return {
        postLogin,
        getManga,
        getMangaId,
        getIdsChapters,
        getIdsPages,
        getPageImage,
        getMangaConMasRanting,
        getCoverImageManga
    };
};
