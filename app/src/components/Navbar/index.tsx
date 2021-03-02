import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const MobileNavbar = () => (
    <ul className="MobileNavbar">
        <li className="MobileNavbar-item">
            <Link to="/">
                <i className="fas fa-home" style={{ color: '#9b111e' }} />
            </Link>
        </li>
        <li className="MobileNavbar-item">
            <Link to="/blogs">
                <i className="fas fa-pen-alt" style={{ color: '#333333' }} />
            </Link>
        </li>
        <li className="MobileNavbar-item">
            <Link to="/projects">
                <i className="fas fa-cubes" style={{ color: '#1787fb' }} />
            </Link>
        </li>
        <li className="MobileNavbar-item">
            <Link to="/books">
                <i className="fas fa-book" style={{ color: '#1787fb' }} />
            </Link>
        </li>
        <li className="MobileNavbar-item">
            <Link to="/requestcv">
                <i className="far fa-address-book" style={{ color: '#1787fb' }} />
            </Link>
        </li>
    </ul>
)

const DesktopNavbar = () => (
    <ul className="DesktopNavbar">
        <li className="DesktopNavbar-item">
            <Link to="/">
                Home
            </Link>
        </li>
        <li className="DesktopNavbar-item">
            <Link to="/blogs">
                Blog
            </Link>
        </li>
        <li className="DesktopNavbar-item">
            <Link to="/projects">
                Projects
            </Link>
        </li>
        <li className="DesktopNavbar-item">
            <Link to="/books">
                Books
            </Link>
        </li>
        <li className="DesktopNavbar-item">
            <Link to="/requestcv">
                Request CV
            </Link>
        </li>
    </ul>
)

export const Navbar = () => (
    <div className="Navbar">
        <DesktopNavbar />
        <MobileNavbar />
    </div>
)
