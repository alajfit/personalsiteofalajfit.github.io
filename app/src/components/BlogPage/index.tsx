import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.scss';

export const BlogPage: React.FC<{ source: string }> = ({ source }) => (
    <div className="BlogPage">
        <ReactMarkdown source={atob(source)} />
    </div>
)
