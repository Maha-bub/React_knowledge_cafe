import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({ handleBookMarks }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div div className="w-2/3 mt-4">
            <h2>Blogs: {blogs.length}</h2>;
            {
                blogs.map((blog) => <Blog
                    key={blog.id}
                    blog={blog}
                    handleBookMarks={handleBookMarks}
                ></Blog>)
            }
        </div >
    );
};
Blogs.PropTypes = {
    handleBookMarks: PropTypes.func
}

export default Blogs;