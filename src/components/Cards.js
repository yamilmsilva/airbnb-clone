import React from 'react'
import './Cards.css'
import Star from "../images/Starlogo.png";

export function Cards(props) {

  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
 
  return (
    <section className="card">
        {
          badgeText && 
          <div className="card--badge">{badgeText}</div>
        }
        <img  
            src={require(`../images/${props.coverImg}`)} 
            alt="" className="card--image"
        />

        <div className="card--stats">
            <img src={Star} alt="Star" className="card--star" />
            <span>{props.stats.rating}</span>
            <span className="grey">({props.stats.reviewCount}) • </span>
            <span className="grey">{props.location}</span>
        </div>
        <p className="card--title">{props.title}</p>
        <p className="card--price">
            <span className="bold">From ${props.price}</span> / person
        </p>
    </section>
  )
}


