import React from 'react';
import './index.scss';

interface IBlogListing {
    name: string;
    href: string;
    date: string;
    type: string;
    time: string;
    desc: string;
}

const BlogListing: React.FC<IBlogListing> = ({ name, href, date, type, time, desc }) => (
    <li>
        <a href={href}>{name}</a>
        <div>
            <span>{date}</span>
            <span>{time}</span>
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
