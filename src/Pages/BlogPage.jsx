import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blog_data } from "../assets/assets";
import moment from "moment";
import Commentbox from "../Components/Comment";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const BlogPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const blog = blog_data.find((item) => item._id === id);
    setData(blog);
  }, [id]);

  if (!data)
    return (
      <div className="flex items-center justify-center min-h-screen text-center text-gray-500 text-lg">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Navbar />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.article
          className="bg-white rounded-lg shadow-md p-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            className="text-sm text-gray-400 mb-5 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Published on {moment(data.createdAt).format("MMMM Do, YYYY")}
          </motion.p>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-snug text-gray-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {data.title}
          </motion.h1>

          {data.subTitle && (
            <motion.div
              className="text-2xl text-gray-700 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              dangerouslySetInnerHTML={{ __html: data.subTitle }}
            />
          )}

          <motion.img
            src={data.image}
            alt={data.title}
            className="w-full rounded-lg mb-10 object-cover max-h-[450px]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          />

          <motion.div
            className="text-lg text-gray-800 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: data.description }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
        </motion.article>

        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Commentbox />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
