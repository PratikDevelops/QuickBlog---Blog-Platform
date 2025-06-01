import React from 'react';
import { useNavigate } from 'react-router-dom';

const Blog = ({ blog }) => {
  const { image, title, subTitle, category, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="bg-white rounded-2xl h-[430px] w-[300px] shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-300"
      />
      <div className="p-5">
        <span className="inline-block text-xs font-semibold text-white bg-[#7366ff] px-3 py-1 rounded-full mb-2">
          {category}
        </span>
        <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-[#7366ff] transition-colors duration-200">
          {title}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: blog.subTitle }} className="text-gray-600 text-sm line-clamp-3">
          
        </p>
        
      </div>
    </div>
  );
};

export default Blog;
