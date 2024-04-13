export const LoadingErrorComponent = ({ loading, error, children }) => {
    console.log(
        '🚀 ----------------------------------------------------------------------------------------------------------------------🚀'
    );
    console.log(
        '🚀 ~ file: LoadingErrorComponent.jsx:3 ~ LoadingErrorComponent ~  loading, error, children:',
        loading,
        error
    );
    console.log(
        '🚀 ----------------------------------------------------------------------------------------------------------------------🚀'
    );

    return (
        <>
            {loading ? (
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : error ? (
                <div className="card text-center">
                    <div className="card-header">Error</div>
                    <div className="card-body">
                        <h5 className="card-title">
                            Hubo un error en la carga
                        </h5>
                        <p className="card-text">
                            With supporting text below as a natural lead-in to
                            additional content.
                        </p>
                    </div>
                    <div className="card-footer text-body-secondary">
                        2 days ago
                    </div>
                </div>
            ) : (
                children && children
            )}
        </>
    );
};
