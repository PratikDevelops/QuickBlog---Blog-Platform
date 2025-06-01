import React, { useState } from 'react';
import { assets } from '../../assets/assets';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [content, setContent] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim() || !coverImage) {
      alert('Please fill all fields!');
      return;
    }
    console.log('Submitting blog:', { title, content, coverImage });
  };

  return (
    <div className="p-6 max-w-4xl ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Blog</h2>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-semibold text-gray-700">Blog Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter blog title"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-semibold text-gray-700">Cover Image</label>
        <div className="relative w-full h-60 border rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow">
          {coverImage ? (
            <img src={coverImage} alt="Cover Preview" className="w-full h-full object-cover" />
          ) : (
            <>
              <img src={assets.upload_area} alt="Upload" className="w-16 h-16 opacity-60" />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </>
          )}
        </div>
      </div>

      <div className="mb-5">
        <label className="block mb-2 text-sm font-semibold text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your blog content here..."
          rows={10}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium shadow-md transition"
      >
        Submit Blog
      </button>
    </div>
  );
};

export default AddBlog;
