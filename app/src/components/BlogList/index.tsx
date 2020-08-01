import React from 'react';
import { IBlogListing } from '../../types';
import './index.scss';

const BlogListing: React.FC<IBlogListing> = ({ name, href, date, type, time, desc }) => (
    <li>
        <a href={href}>{name}</a>
        <div>
            <span>{date}</span>
            <span>Reading Time: {time} mins</span>
        </div>
        <div>Category: {type}</div>
        <div>{desc}</div>
    </li>
)

export const BlogList: React.FC<{ blogs: IBlogListing[] }> = ({ blogs }) => (
    <div>
        <h1>Blogs</h1>
        <h2>Personal Blog of Alan J. Fitzpatrick</h2>
        <ul>
            {blogs.map(blog => (
                <BlogListing
                    key={blog.name}
                    name={blog.name}
                    href={blog.href}
                    date={blog.date}
                    type={blog.type}
                    time={blog.time}
                    desc={blog.desc} />
            ))}
        </ul>
    </div>
)
