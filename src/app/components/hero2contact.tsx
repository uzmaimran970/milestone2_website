export default function Contact() {
    return (
      <div className="w-full h-full flex flex-col items-center py-10 bg-gray-100">
        
        <h1 className="text-4xl font-bold mb-10 text-center">How to Buy Compounded Pharmacy</h1>
        

        <div className="w-full max-w-5xl flex flex-col items-center gap-8 px-4">
          
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src="/o1.png" 
                alt="Pharmacy"
                className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">upload your prescription</h2>
              <p className="text-gray-700">
                fill your personal detail and your compounding prescription
              </p>
            </div>
          </div>
  
        
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src="/o2.png"
                alt="Pharmacy"
                className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">get confirmation and quote for the product</h2>
              <p className="text-gray-700">
              our pharmacist will contact you and ask about your availibility.....
              </p>
            </div>
          </div>

          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src="/03.png"
                alt="Pharmacy"
                className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">payment method</h2>
              <p className="text-gray-700">
                you can pay at your doorstep using cash.....
              </p>
            </div>
          </div>
  
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <div className="w-full md:w-1/4 flex justify-center">
              <img
                src="/04.png"
                alt="Pharmacy"
                className="w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] object-cover rounded-lg"
              />
            </div>
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h2 className="text-xl font-semibold mb-4">get your medician at your door step</h2>
              <p className="text-gray-700">
                you will get your order at your door step....................
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  