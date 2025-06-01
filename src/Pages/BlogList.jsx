import React, { useState } from 'react';
import { blog_data, blogCategories } from '../assets/assets';
import Blog from '../Components/Blog';
import { motion } from 'framer-motion';

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogs =
    activeCategory === 'All'
      ? blog_data
      : blog_data.filter((blog) => blog.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
  
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {['All', ...blogCategories].map((item, index) => (
          <motion.button
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.3 }}
            className={`px-5 py-2 rounded-full transition duration-300 ${
              activeCategory === item
                ? 'bg-[#7366ff] text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory(item)}
          >
            {item}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              <Blog blog={blog} />
            </motion.div>
          ))
        ) : (
          <motion.p
            className="text-center col-span-full text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            No blogs found in this category.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default BlogList;
