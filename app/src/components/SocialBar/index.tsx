import React from 'react';
import './index.scss';

interface SocialSite {
    href: string;
    font: string;
    colr: string;
}

export const SocialBar: React.FC = () => {
    const social: SocialSite[] = [{
        href: 'https://twitter.com/staratarms',
        font: 'fab fa-twitter',
        colr: '#1DA1F2'
    }, {
        href: 'https://www.instagram.com/staratarms',
        font: 'fab fa-instagram',
        colr: '#fb3958'
    }, {
        href: 'https://www.linkedin.com/in/alanjfitzpatrick',
        font: 'fab fa-linkedin-in',
        colr: '#0077B5'
    }, {
        href: 'https://github.com/alajfit',
        font: 'fab fa-github',
        colr: '#333333'
    }, {
        href: 'https://jsfiddle.net/user/alajfit',
        font: 'fab fa-jsfiddle',
        colr: '#1787fb'
    }]

    return (
        <ul className="SocialBar">
            {social.map(site=> (
                <li>
                    <a href={site.href} target="_blank" rel="noopener noreferrer">
                        <i className={site.font} style={{ color: site.colr}}></i>
                    </a>
                </li>
            ))}
        </ul>
    )
}
