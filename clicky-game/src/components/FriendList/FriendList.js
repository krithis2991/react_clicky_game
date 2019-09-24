import React from "react";
import "./FriendList.css";


const FriendList = props => (
    <div className="card">
        <div className="img-container">
            <img className="img-thumbnail img-responsive"
                alt={props.name}
                src={props.image}
                onClick={() => props.clickPicture(props.id)}
            />
        </div>
    </div>
);

export default FriendList;

