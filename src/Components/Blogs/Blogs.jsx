import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <>
            <h2>Blogs: {Blogs.length}</h2>
        </>
    );
};

export default Blogs;