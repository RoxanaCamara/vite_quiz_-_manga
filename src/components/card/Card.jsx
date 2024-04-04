export const Card = ({ description, title }) => {
    return (
        <div className="card m-2" style={{ width: '18rem' }}>
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
