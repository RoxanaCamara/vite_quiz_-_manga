import { useEffect } from 'react';
import { Card } from '../../components/card/Card';
import { useGestorLoadingErrorResponse } from '../../hooks/useGestorLoadingErrorResponse';
import { useServiceManga } from '../../service/useServiceManga';

export const CardLogic = ({ manga }) => {
    const { getCoverImageManga } = useServiceManga();
    const { getEndpointGestor } = useGestorLoadingErrorResponse();
    const { getMangaId } = useServiceManga();

    const openPageWeb = (id) => {
        getEndpointGestor(
            getMangaId(id),
            (e) => console.log(e),
            (e) => console.log(e)
        );
    };

    const viewCoverArt = (idManga, idCoverArt) => {
        getEndpointGestor(
            getCoverImageManga(idManga, idCoverArt),
            (e) => console.log(e),
            (e) => console.log(e)
        );
    };

    useEffect(() => {
        manga && viewCoverArt(manga.id, manga.idCoverArt);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [manga]);

    return (
        <>
            <Card
                manga={manga}
                key={manga.id}
                openPageWeb={openPageWeb}
                viewCoverArt={viewCoverArt}
            />
        </>
    );
};
