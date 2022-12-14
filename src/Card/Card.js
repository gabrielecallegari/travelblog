import React from "react";
import "./Card.css"

export default function Card(props){
    return(
        <div>
            <div className="card">
                <img src={props.imageUrl}  alt="Paesaggio" className="card--img"></img>

                <div className="card--description">

                    <div className="card--location">
                        <label className="card--country">📍{props.location.toUpperCase()}</label>
                        <a href={props.googleMapsUrl} className="card--href">View on Google Maps</a>
                    </div>

                    <h3 className="card--title">{props.title}</h3>

                    <div className="card--date">
                        <label>{props.startDate}</label>
                        <label> - </label>
                        <label>{props.endDate}</label>
                    </div>

                    <label className="card--description-label">{props.description}</label>

                    
                </div>
            </div>
            <hr className="card--hr"></hr>
        </div>
    )
}