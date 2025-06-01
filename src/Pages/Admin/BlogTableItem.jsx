import React from 'react';
import { assets } from '../../assets/assets';

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt, isPublished } = blog;
  const blogDate = new Date(createdAt);

  return (
    <tr className="text-base text-gray-800 border-b hover:bg-gray-100 transition duration-200">
      <th className="px-6 py-5 text-center font-medium">{index}</th>
      <td className="px-6 py-5 font-semibold">{title}</td>
      <td className="px-6 py-5">{blogDate.toLocaleDateString()}</td>
      <td className="px-6 py-5">
        <span
          className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
            isPublished ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          }`}
        >
          {isPublished ? 'Published' : 'Unpublished'}
        </span>
      </td>
      <td className="px-6 py-5 flex items-center gap-4">
        <button
          onClick={() => {
            console.log(`${isPublished ? 'Unpublishing' : 'Publishing'} blog...`);
          }}
          className={`text-white px-4 py-2 rounded-lg text-sm font-medium transition-shadow shadow-md ${
            isPublished ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
          }`}
        >
          {isPublished ? 'Unpublish' : 'Publish'}
        </button>
        <img
          src={assets.cross_icon}
          alt="Delete"
          onClick={() => {
            console.log('Deleting blog...');
          }}
          className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
