
import React, { Component } from 'react'
import './Card.css'
export default class Product extends Component {
    render() {
        const {title,image,price}= this.props;
        return (
            <div className='Card'>
                <h2>{title}</h2>
                <img src={image} alt={image}/>
                <h5>€ {price.toFixed(2)}</h5>
            </div>
        )
    }
}
