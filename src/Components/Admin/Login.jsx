import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [name, setname] = useState('Pratik'); 
  const [password, setpassword] = useState('1234567'); 
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (name === 'Pratik' && password === '1234567') {
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleLogin}
        className=" w-full max-w-sm"
      >
        
        <input
          onChange={(e) => setname(e.target.value)}
          value={name}
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-[#5243f5]"
        />
        <input
          onChange={(e) => setpassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:border-[#5243f5]"
        />
        <button
          type="submit"
          className="w-full bg-[#5243f5] hover:bg-[#3f32cc] text-white py-2 rounded font-semibold transition duration-300"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
