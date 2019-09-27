import React from "react";
//import "./Card.css";

const Card = props => (
    <div className="card" onClick={props.clickHandler}>
        <div className="img-container">
            <img alt={props.name} src={props.image} id={props.id} style={{ height: 100 }} />
        </div>
    </div>
);

export default Card;


