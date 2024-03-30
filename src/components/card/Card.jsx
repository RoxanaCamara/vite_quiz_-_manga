export const Card = (prop) => {
    const { description, title } = prop.manga;

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">
                    Read manga
                </a>
            </div>
        </div>
    );
};
