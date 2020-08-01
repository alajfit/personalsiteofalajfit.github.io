import React from 'react';
import { IBlogListing } from '../../types';
import './index.scss';

const BlogListing: React.FC<IBlogListing> = ({ name, href, date, type, time, desc }) => (
    <li className="BlogListing">
        <a className="BlogListing-title" href={href}>{name.split('-').join(' ')}</a>
        <div className="BlogListing-time">
            <span>{date}</span>
            <span>Reading Time: {time} mins</span>
        </div>
        <div>Category: {type}</div>
        <div>{desc.split('-').join(' ')}</div>
    </li>
)

export const BlogList: React.FC<{ blogs: IBlogListing[] }> = ({ blogs }) => (
    <div className="BlogList">
        <h1 className="BlogList-title">Personal Blog of Alan J. Fitzpatrick</h1>
        <ul className="BlogList-listings">
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
