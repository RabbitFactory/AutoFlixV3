import { useState } from 'react';
import { LogIn } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';


const Navbar = ({ visible, user }) => {
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User logged out');
      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  return (
    <div id='navbar' className={`relative z-50 text-white text-2xl font-bold ${visible ? 'show' : ''}`}>
      <div className='absolute top-10 w-full px-4 md:px-20'>
        <div className='flex justify-between items-center'>
          {/* Navigation Links */}
          <ul className="flex gap-10 lg:text-base">
            <NavLink to="/" className='bg-black bg-opacity-50 rounded-lg px-8 py-4'>Home</NavLink>
            <NavLink to="/about" className='bg-black bg-opacity-50 rounded-lg px-8 py-4'>About</NavLink>
            <NavLink to="/contact" className='bg-black bg-opacity-50 rounded-lg px-8 py-4'>Contact Us</NavLink>
            <NavLink to="/more" className='bg-black bg-opacity-50 rounded-lg px-8 py-4'>More</NavLink>
          </ul>

          {/* Login/Register/Logout Section */}
          <div className='flex'>
            {user ? (
              // User is logged in
              <>
                <div className="flex gap-2 justify-center items-center bg-black bg-opacity-50 rounded-lg px-8 py-4">
                  <p className="text-xl">Welcome, {user.displayName}</p>
                </div>
                <button 
                  onClick={handleLogout} 
                  className="flex gap-2 justify-center items-center bg-black bg-opacity-50 rounded-lg px-8 py-4">
                  <p className='text-xl'>Logout</p>
                </button>
              </>
            ) : (
              // User is logged out
              <>
                <Link to="/login" className="flex gap-2 justify-center items-center bg-black bg-opacity-50 rounded-lg px-8 py-4">
                  <p className='text-xl'>Login</p>
                  <LogIn />
                </Link>
                <Link to="/register" className="flex gap-2 justify-center items-center bg-black bg-opacity-50 rounded-lg px-8 py-4">
                  <p className='text-xl'>Register</p>
                  <LogIn />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
