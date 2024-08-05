import React from "react";
import Avatar from "./Avatar";
import Detail from "./Details";

function Cards(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail detailInfo={props.position} />
        <Detail detailInfo={props.email} />
      </div>
    </div>
  );
}

export default Cards;
