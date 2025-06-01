import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import Login from './Admin/Login';
import { IoMdClose } from 'react-icons/io';

const Navbar = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showLogin]);

  const toggleLoginModal = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 pt-8">
        <div className="flex items-center justify-between w-full">
          <img
            onClick={() => navigate('/')}
            src={assets.logo}
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
          />

          <button
            onClick={toggleLoginModal}
            className="flex items-center gap-2 bg-[#5243f5] text-white px-6 py-2 rounded-full hover:bg-[#4135d5] transition duration-300 shadow-lg"
          >
            Admin Login
            <img src={assets.arrow} alt="arrow" className="w-4 h-4" />
          </button>
        </div>
      </div>

      {showLogin && (
        <div className="fixed inset-0 z-50 bg-amber-50 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-sm p-8 rounded-2xl shadow-2xl animate-scaleIn relative">
            <button
              onClick={toggleLoginModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-2xl"
            >
              <IoMdClose />
            </button>
            <h2 className="text-2xl font-bold text-center mb-6 text-[#5243f5]">Admin Login</h2>
            <Login closeModal={toggleLoginModal} />
          </div>
        </div>
      )}

      <style>{`
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default Navbar;
