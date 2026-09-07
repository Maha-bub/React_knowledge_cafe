import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({ handleBookMarks }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div div className="w-2/3 mt-4">
            <h2>Blogs: {Blogs.length}</h2>;
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

export default Blogs;