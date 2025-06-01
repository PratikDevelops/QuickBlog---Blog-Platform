import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen  px-6 py-8 flex flex-col gap-6">

      <NavLink
        end
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            isActive ? 'bg-[#5243f5] text-white' : 'text-gray-700 hover:bg-gray-200'
          }`
        }
      >
        <img src={assets.home_icon} alt="Dashboard" className="w-5 h-5" />
        <p>Dashboard</p>
      </NavLink>

      <NavLink
        end
        to="/admin/addblog"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            isActive ? 'bg-[#5243f5] text-white' : 'text-gray-700 hover:bg-gray-200'
          }`
        }
      >
        <img src={assets.add_icon} alt="Add Blog" className="w-5 h-5" />
        <p>Add Blog</p>
      </NavLink>

      <NavLink
        end
        to="/admin/listblog"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            isActive ? 'bg-[#5243f5] text-white' : 'text-gray-700 hover:bg-gray-200'
          }`
        }
      >
        <img src={assets.list_icon} alt="List Blog" className="w-5 h-5" />
        <p>List Blog</p>
      </NavLink>

      <NavLink
        end
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
            isActive ? 'bg-[#5243f5] text-white' : 'text-gray-700 hover:bg-gray-200'
          }`
        }
      >
        <img src={assets.comment_icon} alt="Comments" className="w-5 h-5" />
        <p>Comments</p>
      </NavLink>
    </div>
  );
};

export default Sidebar;
