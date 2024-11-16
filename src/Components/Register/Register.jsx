import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust the path as needed
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState(''); // For user display name
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user's display name in Firebase Authentication
      await updateProfile(user, { displayName: displayName });

      // Redirect user to login or home page after successful registration
      navigate('/login');
    } catch (error) {
      setError(error.message); // Handle any registration errors
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
              <div className=" bg-slate-200 rounded-xl p-10 lg:p-20">
            <h2 className='mb-4'>Register</h2>
            <form className='flex flex-col gap-3' onSubmit={handleRegister}>
            <div>
               <input
               className="px-3 py-2 rounded-md"
                 type="text"
                 placeholder="Enter your display name"
                 value={displayName}
                 onChange={(e) => setDisplayName(e.target.value)}
                 required
               />
             </div>
              <div>
                <input
                className="px-3 py-2 rounded-md"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                
                <input
                className="px-3 py-2 rounded-md"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              

              {error && <p className="error-message">{error}</p>}

              <button className='btn' type="submit">Register</button>
            </form>
          </div>
    </div>
  );
};

export default Register;
