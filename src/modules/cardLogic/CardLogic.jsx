import { useEffect, useState } from 'react';
import { Card } from '../../components/card/Card';
import { useGestorLoadingErrorResponse } from '../../hooks/useGestorLoadingErrorResponse';
import { useServiceManga } from '../../service/useServiceManga';

export const CardLogic = ({ manga }) => {
    const [coverImage, setCoverImage] = useState({
        resp: [],
        loading: true,
        error: false
    });

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

    const viewCoverArt = (idCoverArt) => {
        getEndpointGestor(
            getCoverImageManga(idCoverArt),
            (e) => e,
            setCoverImage
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
                coverImage={coverImage}
                openPageWeb={openPageWeb}
                viewCoverArt={viewCoverArt}
            />
        </>
    );
};
