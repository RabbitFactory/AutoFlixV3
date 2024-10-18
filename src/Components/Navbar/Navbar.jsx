import { useState } from 'react';
import { LogIn, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ visible }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='navbar' className={`relative z-50 text-white text-3xl font-bold ${visible ? 'show' : ''}`}>
      <div className='absolute top-10 w-full px-4 md:px-20'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div className="w-48 h-12 relative "> {/* Fixed container size with relative positioning */}
  <img
    className={`absolute top-0 left-[-40px] w-full h-full object-contain rounded-xl transition-opacity duration-500 ease-in-out ${
      isMenuOpen ? 'opacity-100' : 'opacity-0'
    }`}
    src="/img/f.png"
    alt="Logo"
  />
  <img
    className={`absolute top-0 left-[-60px] w-full h-full object-contain rounded-xl transition-opacity duration-500 ease-in-out ${
      isMenuOpen ? 'opacity-0' : 'opacity-100'
    }`}
    src="/img/R.png"
    alt="Logo"
  />
</div>




          

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
  <button onClick={toggleMenu} className="focus:outline-none bg-black bg-opacity-80 p-4">
    {isMenuOpen ? (
      <svg
        className="w-8 h-8 transition-transform duration-300 ease-in-out transform rotate-180"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className="w-8 h-8 transition-transform duration-300 ease-in-out transform rotate-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    )}
  </button>
</div>


          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex gap-10 lg:text-base">
            {['Home', 'About', 'Contact Us', 'More'].map((item, index) => (
              <li key={index} className='bg-black bg-opacity-50 rounded-lg px-8 py-4'>
                <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login Section for Desktop */}
          <div className='hidden lg:flex w-48'>
            <div className='flex gap-2 justify-center items-center bg-black bg-opacity-50 rounded-lg px-8 py-4'>
              <p className='text-xl'>Login</p>
              <LogIn />
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-28 left-0 w-full flex  flex-col items-center bg-black bg-opacity-90 z-40 transition-all duration-500 ease-in-out transform ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          } pointer-events-none ${isMenuOpen && 'pointer-events-auto'}`}
        >
          <ul className='flex  items-center flex-col gap-4 text-xl'>
            {['Home', 'About', 'Contact Us', 'More'].map((item, index) => (
              <li key={index} className='rounded-lg px-8 py-4'>
                <Link to={`/${item.replace(/\s+/g, '').toLowerCase()}`} onClick={() => setIsMenuOpen(false)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Login Section */}
          <div className='flex w-full justify-center mt-4'>
            <div className='flex text-xl gap-2 justify-center items-center rounded-lg px-8 py-4'>
              <p>Login</p>
              <LogIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
