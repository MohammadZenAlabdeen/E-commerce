import React from 'react';
import third from './../../../../assets/BG.png';
import './Card.css';
const url='http://127.0.0.1:8000/storage/images/'
const Card = ({ product }) => {
  return (
    <div className='Card'>
      <img src={product.images[0] ? url+product.images[0].url : third} />
      <div className='Info'>
        <h1>{product.name}</h1>
        <div className='PriceInfo'>
            <div>
            <h2>السعر</h2>
            <span>{product.price}</span>
            </div>
            <div>
            <h2>النسبة</h2>
                <span>{product.percentage}</span>
            </div>
        </div>
        <a href={'http://127.0.0.1:8000/dashboard/products/'+product.id}>
          عرض المنتج
        </a>
      </div>
    </div>
  );
};

export default Card;