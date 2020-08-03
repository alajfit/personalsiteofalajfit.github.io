import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { SocialBar } from 'components/SocialBar';
import { Spacer } from 'components/Spacer';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/dracula.css';
import './index.scss';
hljs.registerLanguage('javascript', javascript);

const BlogImage: React.FC<{ alt: string, src: string }> = ({ alt, src }) =>
    <img className="BlogImage" alt={alt} src={src} />

const BlogCode: React.FC<{ value: string; language: string; }> = ({ value, language }) => {
    let blogCode: HTMLElement | null = null;

    useEffect(() => {
        hljs.highlightBlock(blogCode)
    }, [value, blogCode])

    return (
        <pre className="BlogCode">
            <code ref={el => blogCode = el} className={`language-${language}`}>{value}</code>
        </pre>
    )
}

export const BlogPage: React.FC<{ source: string }> = ({ source }) => {
    const renderers = {
        image: BlogImage,
        code: BlogCode
    };

    return (
        <div className="BlogPage">
            <ReactMarkdown source={atob(source)} renderers={renderers} />
            <Spacer />
            <SocialBar />
        </div>
    )
}
