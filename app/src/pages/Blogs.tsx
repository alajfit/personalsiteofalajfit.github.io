import React, { useState, useEffect } from 'react';
import { IBlogListing } from '../types';
import { getBlogs } from '../api';
import { BlogList } from 'components/BlogList';

export const Blogs = () => {
    const [blogs, setBlogs] = useState<IBlogListing[]>([])

    useEffect(() => {
        getBlogs().then(blogs => setBlogs(blogs))
    }, [])

    return (
        <BlogList blogs={blogs} />
    )
}