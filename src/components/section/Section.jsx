import { CardsLogic } from '../../modules/cardsLogic/CardsLogic';
import { LoadingErrorComponent } from '../loadingErrorComponent/LoadingErrorComponent';

export const Section = ({ title, mangasList, loading, error }) => {
    return (
        <div className="card m-4">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <div className="container text-center">
                    <div className="row">
                        <LoadingErrorComponent loading={loading} error={error}>
                            <CardsLogic mangasList={mangasList} />
                        </LoadingErrorComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};
