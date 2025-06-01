import React from 'react';

const NewsLetter = () => {
  return (
    <div className=" py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Never Miss a Blog</h1>
        <p className="text-gray-600 text-lg mb-8">
          Subscribe to our newsletter to get the latest blog updates right to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7366ff]"
          />
          <button
            type="submit"
            className="bg-[#7366ff] text-white px-6 py-3 rounded-lg hover:bg-[#5a4ad3] transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
