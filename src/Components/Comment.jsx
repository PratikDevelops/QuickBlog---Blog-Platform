import React from 'react'
import { assets } from '../assets/assets'

const Commentbox = () => {
  return (
    <div className="max-w-xl mx-auto justify-center align-middle p-6 space-y-8">

      <div>
        <h2 className="text-xl font-semibold mb-4">Comments (0)</h2>
        <form className="flex flex-col space-y-4">
          <input 
            type="text" 
            placeholder="Your name" 
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#7366ff]" 
          />
          <textarea 
            placeholder="Write your comment here..." 
            rows="4"
            className="border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-[#7366ff]"
          ></textarea>
          <button 
            type="submit" 
            className="self-start bg-[#7366ff] text-white px-6 py-2 rounded-md hover:bg-[#5a50d6] transition"
          >
            Submit
          </button>
        </form>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Share This Article</h3>
        <div className="flex space-x-6">
          <img src={assets.facebook_icon} alt="Facebook" className="w-14 h-14 cursor-pointer hover:opacity-75 transition" />
          <img src={assets.twitter_icon} alt="Twitter" className="w-14 h-14 cursor-pointer hover:opacity-75 transition" />
          <img src={assets.googleplus_icon} alt="Google Plus" className="w-14 h-14 cursor-pointer hover:opacity-75 transition" />
        </div>
      </div>
    </div>
  )
}

export default Commentbox
