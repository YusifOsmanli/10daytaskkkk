import React from 'react'
import "./Card.css"

const Card = ({ item }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <div><img src={item.image} alt="" /></div>
            <div>

                <div>
                    <p>${item.price}</p>
                </div>
                <div>
                    <p><del>$1000</del></p>
                </div>
                <div>

                </div>

            </div>
        </div>
    )
}

export default Card