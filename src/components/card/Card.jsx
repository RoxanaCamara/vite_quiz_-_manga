export const Card = ({ description, title, abrirPageWeb, id }) => {
    console.log('🚀 --------------------------------------🚀');
    console.log('🚀 ~ file: Card.jsx:3 ~ Card ~ id:', id);
    console.log('🚀 --------------------------------------🚀');

    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a
                    href="#"
                    className="btn btn-primary"
                    onClick={() => abrirPageWeb(id)}
                >
                    Read manga
                </a>
            </div>
        </div>
    );
};
