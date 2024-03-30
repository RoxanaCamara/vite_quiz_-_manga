import { useEffect, useState } from 'react';
import { Navigation } from '../../components/navigation/Navigation';
import { useServiceManga } from '../../service/useServiceManga';
import { Card } from '../../components/card/Card';
import { useLanguage } from '../../hooks/useLanguage';

export const Manga = () => {
    //const [login, setLogin] = useState({});
    const [mangasList, setMangasList] = useState([]);

    console.log(
        '🚀 ---------------------------------------------------------🚀'
    );
    console.log('🚀 ~ file: Manga.jsx:11 ~ Manga ~ mangasList:', mangasList);
    console.log(
        '🚀 ---------------------------------------------------------🚀'
    );

    //const [manga, setManga] = useState({});
    //const [chapterIdList, setChapterIdList] = useState([]);
    //const [pageIdList, setPageIdList] = useState({});

    const { getMangaConMasRanting } = useServiceManga();
    const { getMangaLanguage } = useLanguage();

    useEffect(() => {
        getMangaConMasRanting()
            .then((e) => {
                setMangasList(e.data.data.map((e) => getMangaLanguage(e)));
            })
            .catch((error) => error);
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
            {mangasList.map((e) => (
                <Card manga={e} key={e.id} />
            ))}
        </>
    );
};
