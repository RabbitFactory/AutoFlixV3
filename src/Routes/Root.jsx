
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import { useEffect, useState } from 'react';
const Root = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);
  return (
    <>
    <Navbar visible={visible}></Navbar>
    <Outlet></Outlet>
    </>
  )
}

export default Root