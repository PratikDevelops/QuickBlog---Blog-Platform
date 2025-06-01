import React, { useState, useEffect } from 'react';
import { assets, dashboard_data } from '../../assets/assets';
import BlogTableItem from './BlogTableItem';

const DashBoard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  });

  const fetchDashboardData = async () => {
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <div className="flex">

      <div className="flex-1 p-6  min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex items-center gap-4 bg-white rounded shadow p-5">
            <img src={assets.dashboard_icon_1} alt="Blogs" className="w-14 h-14" />
            <div>
              <p className="text-3xl font-bold">{dashboardData.blogs}</p>
              <p className="text-gray-600">Blogs</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white rounded shadow p-5">
            <img src={assets.dashboard_icon_2} alt="Comments" className="w-14 h-14" />
            <div>
              <p className="text-3xl font-bold">{dashboardData.comments}</p>
              <p className="text-gray-600">Comments</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white rounded shadow p-5">
            <img src={assets.dashboard_icon_3} alt="Drafts" className="w-14 h-14" />
            <div>
              <p className="text-3xl font-bold">{dashboardData.drafts}</p>
              <p className="text-gray-600">Drafts</p>
            </div>
          </div>
        </div>

        <div className=" rounded shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <img src={assets.dashboard_icon_4} alt="Latest Blogs" className="w-6 h-6" />
            <p className="text-lg font-semibold">Latest Blogs</p>
          </div>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left text-sm uppercase tracking-wider">
                <th className="px-4 py-3">#</th>
                <th className="px-4 py-3">Blog Title</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={index}
                  blog={blog}
                  fetchBlogs={fetchDashboardData}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
