import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../UserContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {user,setUser} = useContext(UserContext)
  const validateForm = () => {
    if (!email.trim()) {
      setError('Email is required.');
      return false;
    }
    if (!password.trim()) {
      setError('Password is required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      return;
    }

    const loginData = { email, password };

    axios.post('http://localhost:5000/api/users/login', loginData)
      .then((res) =>{ 
        setUser(res.data.user);
        localStorage.setItem("quiz_token",res.data.token);
        navigate("/")
    })
      .catch((err) => setError('Invalid email or password.'));
  };

  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-400 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Login</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your password"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition w-full"
        >
          Login
        </button>
      <p className='text-blue-700 font-serif '>not signUp <Link to={'/register'}><span className='font-semibold'>Register</span></Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
