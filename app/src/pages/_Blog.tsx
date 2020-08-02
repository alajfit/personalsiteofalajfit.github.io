import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GithubBlogInfo, EncodingType } from '../types';
import { BlogPage } from 'components/BlogPage';
import { getBlog } from '../api';

export const Blog = () => {
    let { blogSha } = useParams<{ blogSha: string }>();
    const [blog, setBlog] = useState<GithubBlogInfo>({
        sha: '',
        node_id: '',
        size: 0,
        url: '',
        content: '',
        encoding: EncodingType.BASE64,
    })

    useEffect(() => {
        const fetchBlog = async () => {
            const blog = await getBlog(blogSha)
            setBlog(blog);
        }
        fetchBlog()
    }, [blogSha])

    return (
        <BlogPage source={blog.content.toString()} />
    )
}
