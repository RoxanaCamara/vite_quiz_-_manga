//import { useState } from 'react';
import { Card } from '../../components/card/Card';

export const CardLogic = ({ mangasList }) => {
  

    /*const { getCoverImageManga } = useServiceManga();
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
    };*/

    return (
        <>
            {mangasList.map((e) => (
                <Card
                    manga={e}
                    key={e.id}
                    //  openPageWeb={openPageWeb}
                    // viewCoverArt={viewCoverArt}
                />
            ))}
        </>
    );
};
