import React, { useEffect, useState } from 'react';
import { comments_data } from '../../assets/assets';
import { assets } from '../../assets/assets'; // Assuming cross_icon is here

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState('Not Approved');

  useEffect(() => {
    setComments(comments_data);
  }, []);

  const filteredComments = comments.filter(comment =>
    filter === 'Approved' ? comment.isApproved : !comment.isApproved
  );

  const handleApprove = (id) => {
    setComments(prev =>
      prev.map(comment =>
        comment._id === id ? { ...comment, isApproved: true } : comment
      )
    );
  };

  const handleDelete = (id) => {
    setComments(prev => prev.filter(comment => comment._id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Comments</h2>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setFilter('Approved')}
          className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all ${
            filter === 'Approved' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Approved
        </button>
        <button
          onClick={() => setFilter('Not Approved')}
          className={`px-4 py-2 rounded-lg text-sm font-medium shadow-md transition-all ${
            filter === 'Not Approved' ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          Not Approved
        </button>
      </div>

      <div className="overflow-x-auto p-6 rounded shadow">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 text-gray-700 text-sm uppercase">
            <tr>
              <th className="px-6 py-4 font-semibold">Blog Title & Comment</th>
              <th className="px-6 py-4 font-semibold">Date</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredComments.length > 0 ? (
              filteredComments.map((comment, index) => (
                <tr
                  key={comment._id}
                  className="text-gray-800 border-b hover:bg-gray-50 transition duration-200"
                >
                  <td className="px-6 py-5">
                    <p className="font-semibold">{comment.blog.title}</p>
                    <p className="text-sm text-gray-600 mt-1">"{comment.content}"</p>
                    <p className="text-xs text-gray-500 mt-1">by {comment.name}</p>
                  </td>
                  <td className="px-6 py-5 text-sm">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
                        comment.isApproved
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {comment.isApproved ? 'Approved' : 'Pending'}
                    </span>
                  </td>
                  <td className="px-6 py-5 flex items-center gap-4">
                    {!comment.isApproved && (
                      <button
                        onClick={() => handleApprove(comment._id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-md transition-all"
                      >
                        Approve
                      </button>
                    )}
                    <img
                      src={assets.cross_icon}
                      alt="Delete"
                      onClick={() => handleDelete(comment._id)}
                      className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform"
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-8 text-gray-500">
                  No comments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Comments;
