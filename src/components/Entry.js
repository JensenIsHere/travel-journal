import React from "react";
import map_pin from "../images/map_pin.svg";

export default function Entry(props) {
  return (
    <div className="entry--container">
      <img className="entry--loc_img" src={props.imageUrl} />
      <div className="entry--text_area">
        <div className="entry--location_text">
          <img className="entry--pin_img" src={map_pin}></img>
          <span className="entry--location">{props.location}</span>
          <a className="entry--map_link" href={props.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="entry--title">{props.title}</h2>
        <h6 className="entry--dates">
          {props.startDate} - {props.endDate}
        </h6>
        <p className="entry--description">{props.description}</p>
      </div>
    </div>
  );
}
