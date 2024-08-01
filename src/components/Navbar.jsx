import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext';

const Navbar = () => {

  const{user,setUser}=useContext(UserContext);
   
  function makeLogout(){
    setUser(null);
    localStorage.removeItem("quiz_token")
  }


  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Quiz Platform</h1>
        <div className="flex space-x-6">
          <Link to="/" className="text-white text-lg hover:text-indigo-200 transition-colors duration-200">
            Home
          </Link>
          <Link to="/quiz" className="text-white text-lg hover:text-indigo-200 transition-colors duration-200">
            Take Quiz
          </Link>
          {
            user&&user.role=="admin"&&<Link to="/create" className="text-white text-lg bg-white bg-opacity-20 rounded px-3 py-2 hover:bg-opacity-30 transition">
            Create Quiz
          </Link>
          }
         {
         !user?
         <Link to="/login" className="text-white text-lg hover:text-indigo-200 transition-colors duration-200">
         Login
       </Link>
       :<button onClick={makeLogout}  className="text-white text-lg hover:text-indigo-200 transition-colors duration-200">
         LogOut
       </button>
         }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
