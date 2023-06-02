import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import MyMenu from './Components/MyMenu.jsx'


export default function App() {
  const navigate = useNavigate();

  //leverge useEffect hook to navigate to home page on load
  useEffect(() => {
    navigate('/home');
  }, []); // empty dependency array so effect runs only when component mounts


  return (
    <>
      <div id="top_bar">
        <div id="logo">
          <h3>
            <Link to={`/Home`} style={{textDecoration : 'none', fontSize: "110%", color: '#17281c'}}>Ethan Liss-Roy</Link>
          </h3>
        </div>
        <div id="my_menu">
          <MyMenu />
        </div>
      </div>
      {/* <Divider /> */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}