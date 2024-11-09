import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4 flex flex-col md:flex-row justify-between items-center">
      <div className="text-white font-bold text-2xl">
        Dawaii
      </div>


      <div className="w-full md:w-auto my-2 md:my-0 flex justify-center md:justify-start">
        <input
          type="text"
          placeholder="Search..."
          className="w-3/4 md:w-auto p-2 rounded-full md:pl-[30px] text-black"
        />
      </div>


      <div className="flex space-x-4 mt-2 md:mt-0">
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/about" className="text-white">
          About
        </Link>
        <Link href="/contact" className="text-white">
          Contact
        </Link>
      </div>

      
      <div className="flex space-x-4 mt-2 md:mt-0">
        <Link href="/signin" className="text-white">
          Sign In
        </Link>
        <Link href="/signup" className="text-white">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
