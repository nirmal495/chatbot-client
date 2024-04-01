import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className="nav">
            <div className="nav-container">
                <Link to="/home" className="nav-link">
                    Home
                </Link>
                <Link to="/profile" className="nav-link">
                    Profile
                </Link>
                <Link to="/blog" className="nav-link">
                    Blog
                </Link>
                <Link to="/editor" className="nav-link">
                    Editor
                </Link>
            </div>
        </div>
    );
};

export default Nav;
