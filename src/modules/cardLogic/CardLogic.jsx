//import { useState } from 'react';
import { Card } from '../../components/card/Card';
import { useGestorLoadingErrorResponse } from '../../hooks/useGestorLoadingErrorResponse';
import { useServiceManga } from '../../service/useServiceManga';

export const CardLogic = ({ mangasList }) => {
    /*const [mangaChosed, setMangaChosed] = useState({});

    console.log(
        '🚀 ------------------------------------------------------------------🚀'
    );
    console.log(
        '🚀 ~ file: CardLogic.jsx:9 ~ CardLogic ~ mangaChosed:',
        mangaChosed
    );
    console.log(
        '🚀 ------------------------------------------------------------------🚀'
    );*/

    const { getEndpointGestor } = useGestorLoadingErrorResponse();
    const { getMangaId } = useServiceManga();

    const abrirPageWeb = (id) => {
        getEndpointGestor(
            getMangaId(id),
            (e) => console.log(e),
            (e) => console.log(e)
        );
    };

    return (
        <>
            {mangasList.map((e) => (
                <Card manga={e} key={e.id} abrirPageWeb={abrirPageWeb} />
            ))}
        </>
    );
};
