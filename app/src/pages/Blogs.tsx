import React, { useState, useEffect } from 'react';
import { GithubTreeInfo } from '../types';
import { getBlogs } from '../api';

export const Blogs = () => {
    const [blogs, setBlogs] = useState<GithubTreeInfo[]>([])

    useEffect(() => {
        getBlogs().then(blogs => setBlogs(blogs))
    }, [])

    return (
        <div>
            <h1>Blogs</h1>
            <ul>
                {blogs.map(blog => (
                    <li key={blog.sha.toString()}>{blog.path}</li>
                ))}
            </ul>
        </div>
    )
}