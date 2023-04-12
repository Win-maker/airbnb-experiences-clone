import React from "react"
import './style.css'
import person1 from '../images/person1.png'
import star1 from '../images/star1.png'

export default function Card(props) {

    let badgeText;
    if (props.openSpots === 0) badgeText = "SOLD OUT"
    else badgeText = 'ONLINE'

    return (
        <div className="cardContainer">
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={props.coverImg} />
                <div className="card--stats">
                    <img src={star1} className="card--star" />
                    <span>{props.stats.rating}</span>
                    <span className="gray">({props.stats.reviewCount}) • </span>
                    <span className="gray">{props.location}</span>
                </div>
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price}</span> / person</p>
            </div>
        </div>
    )
}
