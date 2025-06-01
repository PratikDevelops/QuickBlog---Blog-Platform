import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-4 py-14 text-center overflow-hidden">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Write Freely <span className="text-[#7366ff]">Publish</span> <br />Boldly
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mt-6 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        This is your space to think out loud, to share what matters.
        <br /> Whether it's one word or a thousand, your story starts right here.
      </motion.p>

      <motion.form
        className="mt-10 w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.div
          className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <input
            type="text"
            placeholder="Search articles..."
            className="flex-grow px-5 py-3 outline-none text-gray-800"
          />
          <button
            type="submit"
            className="bg-[#7366ff] text-white px-6 py-3 hover:bg-[#5a4ad3] transition duration-300"
          >
            Search
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};

export default Hero;
