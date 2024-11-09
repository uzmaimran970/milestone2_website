"use client";

import React from 'react';

const ProductGrid = () => {
  const products = [
    { img: '/g1.webp', alt: 'Product 1' },
    { img: '/g2.webp', alt: 'Product 2' },
    { img: '/g4.webp', alt: 'Product 3' },
    { img: '/g5.webp', alt: 'Product 4' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-between bg-white shadow-md rounded-lg p-4"
        >
          <img src={product.img} alt={product.alt} className="w-full h-48 object-cover rounded" />
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Order Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
