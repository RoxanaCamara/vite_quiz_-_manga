import { Card } from '../card/Card';
import { LoadingErrorComponent } from '../loadingErrorComponent/LoadingErrorComponent';

export const Section = ({ title, mangasList, loading, error }) => {
    return (
        <div className="card m-4">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <div className="container text-center">
                    <div className="row">
                        <LoadingErrorComponent loading={loading} error={error}>
                            {mangasList.map((e) => (
                                <Card manga={e} key={e.id} />
                            ))}
                        </LoadingErrorComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};
