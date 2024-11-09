import React from 'react';

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: '/e1.webp',
      name: 'ACCU check instant wireless',
      description: 'blood sugar check machine',
      oldPrice: 6550,
      newPrice: 5500,
    },
    {
      id: 2,
      image: '/e2.webp',
      name: 'free style libre blood glucose',
      description: 'reader 1pcs.pack',
      oldPrice: 5500,
      newPrice: 4500,
    },
    {
      id: 3,
      image: '/e3.webp',
      name: 'ACCU check fastclix strip-24',
      description: ' pics strip.pack',
      oldPrice: 9500,
      newPrice: 7500,
    },
    {
      id: 4,
      image: '/e4.webp',
      name: 'smart flimingo',
      description: 'abdominal belt-2002-small',
      oldPrice: 5000,
      newPrice: 3500,
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-center mb-6">Medical Equipment</h2>
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
