import React from "react";
import marker from "../images/location-marker.png";
import formatDate from "../Helpers/helpers";

export default function Entry(props) {
  return (
    <section className="entry-wrapper">
      <div className="entry-image-wrapper">
        <img
          src={require(`../images/${props.data.img}`)}
          alt=""
          className="entry-image"
        />
      </div>
      <div className="entry-details">
        <div className="entry-location-wrapper">
          <span>
            <img src={marker} alt="marker" className="marker" />
          </span>
          <span className="entry-location">
            {props.data.country.toUpperCase()}
          </span>
          <a href={props.data.mapsLink} className="entry-map-link">
            View on Google Maps
          </a>
        </div>
        <h3 className="entry-title">{props.data.location}</h3>
        <h5 className="entry-dates">
          <span className="dateFrom">{formatDate(props.data.dateFrom)} - </span>
          <span className="dateTo">{formatDate(props.data.dateTo)}</span>
        </h5>
        <p className="entry-description">{props.data.description}</p>
      </div>
    </section>
  );
}
