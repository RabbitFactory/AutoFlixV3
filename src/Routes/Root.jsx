import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Root = () => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState(null); // Track user authentication state

  useEffect(() => {
    // Check authentication state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user based on authentication status
    });

    // Handle the visibility after a delay
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000); // 2 seconds delay to show the Navbar

    // Cleanup on component unmount
    return () => {
      unsubscribe(); // Unsubscribe from auth state listener
      clearTimeout(timer); // Cleanup timer
    };
  }, []);

  return (
    <>
      {/* Pass both user and visible to the Navbar */}
      <Navbar user={user} visible={visible} />
      <Outlet />
    </>
  );
};

export default Root;
