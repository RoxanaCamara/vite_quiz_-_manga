import { useState } from 'react';
import { Navigation } from '../../components/navigation/Navigation';
import { useServiceManga } from '../../service/useServiceManga';
import { useEffect } from 'react';

export const Manga = () => {
    const [data, setData] = useState({});

    console.log('🚀 --------------------------------------------🚀');
    console.log('🚀 ~ file: Manga.jsx:9 ~ Manga ~ data:', data);
    console.log('🚀 --------------------------------------------🚀');

    const [manga, setManga] = useState({});

    console.log('🚀 -----------------------------------------------🚀');
    console.log('🚀 ~ file: Manga.jsx:10 ~ Manga ~ manga:', manga);
    console.log('🚀 -----------------------------------------------🚀');

    const { login, getManga, getChapter } = useServiceManga();

    useEffect(() => {
        login()
            .then((e) => {
                setData(e.data);
            })
            .catch((error) => error);
        return () => {};

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getManga('Beelzebub')
            .then((e) => {
                setManga(e.data.data);
            })
            .catch((error) => error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getChapter('8af3ad21-3e7e-4fb5-b344-d0044ec154fc')
            .then((e) => {
                setManga(e.data.data);
            })
            .catch((error) => error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Navigation />
        </>
    );
};
