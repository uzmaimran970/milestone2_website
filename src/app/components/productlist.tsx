import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: '/d1.webp',
      name: 'paradox',
      description: 'tothpaste extra fresh',
      oldPrice: 1000,
      newPrice: 800,
    },
    {
      id: 2,
      image: '/d2.webp',
      name: 'humdrd ispagol ',
      description: 'classic 36',
      oldPrice: 1200,
      newPrice: 900,
    },
    {
      id: 3,
      image: '/d3.webp',
      name: 'clean and clear',
      description: ' essintial face wash',
      oldPrice: 1500,
      newPrice: 1100,
    },
    {
      id: 4,
      image: '/d4.webp',
      name: 'raheeq honey',
      description: '125-gram bottle',
      oldPrice: 1800,
      newPrice: 1400,
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Popular Products</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <div key={product.id} className="w-64 bg-white shadow-lg rounded-lg p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <div className="flex items-center justify-center mt-2 space-x-2">
              <span className="text-sm text-red-500 line-through">Rs. {product.oldPrice}</span>
              <span className="text-sm font-bold text-green-600">Rs. {product.newPrice}</span>
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
