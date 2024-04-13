import { CardLogic } from '../cardLogic/CardLogic';

export const CardsLogic = ({ mangasList }) => {
    return (
        <>
            {mangasList &&
                mangasList.map((e) => <CardLogic manga={e} key={e.id} />)}
        </>
    );
};
