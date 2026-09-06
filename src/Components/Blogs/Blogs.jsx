import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div div className="w-2/3">
            <h2>Blogs: {Blogs.length}</h2>;
            {/* {
                blogs.map((blogs))
            } */}
        </div>
    );
};

export default Blogs;