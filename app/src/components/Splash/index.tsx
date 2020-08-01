import React from 'react';
import './index.scss';

const MyName: React.FC = () => (
    <h1 className="MyName">Alan J. Fitzpatrick</h1>
)

const TagLine: React.FC = () => (
    <h2 className="Tagline">
        Full Stack Engineer who <i className="far fa-heart" style={{ color: '#9b111e' }}></i>'s Node.js
    </h2>
)

export const Splash: React.FC = () => {
    const aboutText = [
        'Working as a Full Stack Developer in the trenches I have climbed my way up the Developer Tree of Knowledge',
        'I have been fortunate enough to work with some of the biggest companies in the world, some of the oldest companies in the world and on some of the greatest projects you could imagine',
        'I felt this was better than making a real site. Hey I just wanna Keep It Simple Stupid, why not try and find me on one of these:'
    ]

    return (
        <div className="Splash">
            <MyName />
            <TagLine />
            {aboutText.map((para, i) => (
                <p className="Splash-about-p" key={i}>{para}</p>
            ))}
        </div>
    )
}
