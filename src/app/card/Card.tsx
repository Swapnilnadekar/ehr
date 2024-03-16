import React from 'react';
import './Card.css';

interface CardProps {
    image?: string;
}

const Card: React.FC<CardProps> = ({ image }) => {
    return (
        <div className="card">
            <img className='image' width={"160px"} src={image} alt={''} />
            {/* <label className='spl'>{specialization}</label> */}
        </div>
    );
};




export default Card;