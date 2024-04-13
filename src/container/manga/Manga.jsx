import { useEffect, useState } from 'react';
import { Navigation } from '../../components/navigation/Navigation';
import { useServiceManga } from '../../service/useServiceManga';

import { Section } from '../../components/section/Section';
import { useGestorLoadingErrorResponse } from '../../hooks/useGestorLoadingErrorResponse';
import { useConvert } from '../../hooks/useConvert';

export const Manga = () => {
    //const [login, setLogin] = useState({});
    const [mangasList, setMangasList] = useState({
        resp: [],
        loading: true,
        error: false
    });

    const { getEndpointGestor } = useGestorLoadingErrorResponse();

    //const [manga, setManga] = useState({});
    //const [chapterIdList, setChapterIdList] = useState([]);
    //const [pageIdList, setPageIdList] = useState({});

    const { getMangaConMasRanting } = useServiceManga();
    const { getConvertDataMangas } = useConvert();

    useEffect(() => {
        getEndpointGestor(
            getMangaConMasRanting(),
            getConvertDataMangas,
            setMangasList
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    /*useEffect(() => {
        postLogin()
            .then((e) => {
                setLogin(e.data);
            })
            .catch((error) => error);
        return () => {};

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);*/
    /*useEffect(() => {
        getIdsChapters('8af3ad21-3e7e-4fb5-b344-d0044ec154fc')
            .then((e) => {
                setChapterIdList(e);
            })
            .catch((error) => error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        getIdsPages('3a2480b8-6399-4b98-b99d-c1924b28a2a0')
            .then((resp) => {
                const host = resp.data.baseUrl;
                const chapterHash = resp.data.chapter.hash;
                const data = resp.data.chapter.data;

                //const dataSaver = resp.data.chapter.dataSaver;
                setPageIdList({ data, chapterHash, host });
                imagePage(data, chapterHash, host);
            })
            .catch((error) => error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const imagePage = (data, chapterHash, host) => {
        // const folderPath = `Mangadex/${'3a2480b8-6399-4b98-b99d-c1924b28a2a0'}`; // id page
        data.map((page) => {
            getPageImage(host, chapterHash, page);
        });

        //fs.mkdirSync(folderPath, { recursive: true });
        // fs.writeFileSync(`${folderPath}/${page}`, data);
    };*/

    return (
        <>
            <Navigation />
            <Section
                title="Más Recientes"
                mangasList={mangasList.resp}
                loading={mangasList.loading}
                error={mangasList.error}
            />
        </>
    );
};
