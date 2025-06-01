import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import BlogList from './BlogList';
import NewsLetter from '../Components/NewsLetter';
import Footer from '../Components/Footer';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className=" text-gray-900">
      <Navbar />

      <section>
        <Hero />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className=""
      >
        <BlogList />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className=""
      >
        <NewsLetter />
      </motion.section>

      <Footer />
    </div>
  );
};

export default Home;
