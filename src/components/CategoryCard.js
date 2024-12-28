import React from "react";

function CategoryCard({ category, onClick, isActive }) {
  return (
    <div
      onClick={onClick}
      className={`flex-shrink-0 w-24 md:w-32 h-32 md:h-40 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform transform hover:scale-105 ${
        isActive ? "border-2 border-yellow-500" : "border"
      }`}
    >
      <img src={category.image} alt={category.name} className="w-full h-2/3 object-cover" />
      <div className="p-2 text-center">
        <h3 className="text-sm md:text-base font-semibold">{category.name}</h3>
      </div>
    </div>
  );
}

export default CategoryCard;
