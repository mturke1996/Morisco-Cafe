import React from "react";

function ItemCard({ item }) {
  return (
    <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 p-4 max-w-md md:max-w-2xl mx-auto">
      {/* الصورة على الجانب الأيمن */}
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-md"
        />
      </div>
      {/* المحتوى بجانب الصورة */}
      <div className="ml-4 flex-1">
        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600 mt-1">{item.description}</p>
        <div className="mt-3 text-yellow-500 font-bold text-lg">SR {item.price}</div>
      </div>
    </div>
  );
}

export default ItemCard;