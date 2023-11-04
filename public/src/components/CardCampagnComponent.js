import React from 'react';

const CardCampagnComponent = () => {
    return (

        <div className="card">
            <img className="card-img-top" src="..." alt={imgUrl} ></img>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="/help/1" className="btn btn-primary">Посмотреть</a>
            </div>
        </div>

    );
}

export default CardCampagnComponent;
