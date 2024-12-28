import React from "react";

function ItemCard({ item }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <img src={item.image} alt={item.name} className="w-full h-36 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
        <div className="mt-4 text-yellow-500 font-bold text-lg">SR {item.price}</div>
      </div>
    </div>
  );
}

export default ItemCard;
