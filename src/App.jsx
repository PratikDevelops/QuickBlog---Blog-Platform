import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import Layout from './Pages/Admin/Layout';
import DashBoard from './Pages/Admin/DashBoard';
import AddBlog from './Pages/Admin/AddBlog';
import ListBlog from './Pages/Admin/ListBlog';
import Comments from './Pages/Admin/Comments';
import Login from './Components/Admin/Login';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/login' element={<Login/>}/>
      <Route path="/blog/:id" element={<BlogPage />} />
      <Route path="/admin" element={<Layout />}>
        <Route index element={<DashBoard />} />
        <Route path="addBlog" element={<AddBlog />} />
        <Route path="listBlog" element={<ListBlog />} />
        <Route path="comments" element={<Comments />} />
      </Route>
    </Routes>
  );
};

export default App;
