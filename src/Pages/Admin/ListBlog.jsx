import React, { useState ,useEffect } from 'react'
import { blog_data } from '../../assets/assets'
import { assets } from '../../assets/assets'
import BlogTableItem from './BlogTableItem'


const ListBlog = () => {
  const [blogs, setblogs] = useState([])

  const fetchBlogs = async ()=>{
    setblogs(blog_data)
  }
  useEffect(()=>{
fetchBlogs()
  },[])
  return (
    <div>
      <div>
        <div className=" rounded shadow p-6">
          <div className="flex items-center gap-3 mb-4">
            <img src={assets.dashboard_icon_4} alt="Latest Blogs" className="w-6 h-6" />
            <p className="text-lg font-semibold">All Blogs</p>
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
              {blogs.map((blog, index) => (
                <BlogTableItem
                  key={index}
                  blog={blog}
                  fetchBlogs={fetchBlogs}
                  index={index + 1}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListBlog