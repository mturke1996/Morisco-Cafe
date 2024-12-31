import React from 'react';
import './styles.css';

function ItemCard({ item }) {
  return (
    <div className="item-card">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-details">
        <h3 className="item-name">{item.name}</h3>
        <p className="item-description">{item.description}</p>
        <div className="item-price"> {item.price} د.ل</div>
      </div>
    </div>
  );
}

export default ItemCard;
