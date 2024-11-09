export default function AboutUs() {
    return (
      <div className="flex flex-col md:flex-row items-center p-5 md:p-10 bg-gray-100 gap-5">
        
        <div className="w-full md:w-1/4 flex justify-center md:justify-start">
          <img
            src="/home-pharmacy.png" 
            alt="About Us"
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-lg object-cover"
          />
        </div>
  
        
        <div className="w-full md:w-3/4 text-center md:text-left pl-0 md:pl-[100px]">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            interdum lorem. Curabitur bibendum lacus a mi scelerisque, sit amet
            accumsan nunc elementum. Fusce non diam nec velit fermentum
            convallis.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id
            interdum lorem. Curabitur bibendum lacus a mi scelerisque, sit amet
            accumsan nunc elementum. Fusce non diam nec velit fermentum
            convallis.
          </p>
        </div>
      </div>
    );
  }
  