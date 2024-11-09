export default function PharmacyOrderForm() {
    return (
      <div className="w-full flex flex-col items-center py-10 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8">Order Your Pharmacy Products Online</h1>
  
        <form className="w-full max-w-4xl px-4 bg-gray-200 p-8 rounded-lg shadow-lg">
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                />
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Delivery Address</h2>
            <div className="w-full">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="w-full">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                />
              </div>
              <div className="w-full">
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                />
              </div>
            </div>
          </div>
  
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Select Products</h2>
            <div className="w-full">
              <label htmlFor="product" className="block text-sm font-medium text-gray-700">Product</label>
              <select
                id="product"
                name="product"
                required
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
              >
                <option value="">Select a product</option>
                <option value="pharma">pharma</option>
                <option value="product2">homeopathic</option>
                <option value="product3">medical equipment</option>
                <option value="product4">baby nutrations</option>
              </select>
            </div>
          </div>
  
          
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full">
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                />
              </div>
              <div className="w-full">
                <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">Expiration Date</label>
                <input
                  type="text"
                  id="expiration"
                  name="expiration"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                />
              </div>
            </div>
            <div className="w-full mt-4">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
              <input
                type="text"
                id="CVV"
                name="CVV"
                required
                className="w-full p-2 border border-gray-300 rounded-md mt-2"
              />
            </div>
          </div>
  
    
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
            >
              Place Order
            </button>
          </div>
        </form>
      </div>
    );
  }
  