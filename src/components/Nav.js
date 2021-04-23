import React from 'react';

// Instead of href use to and instead of A tags use link
import { Link } from 'react-router-dom';

//........................................................................ Styling--0 

const nav = {
    minHeight: `10vh`,
    display: `flex`,
    margin: `auto`,
    justifyContent: `space-between`,
    alignItems: `center`,
    padding: `1rem 10rem`,
    backgroundColor: `#282828`,
}

const navA = {
    color: `white`,
    textDecoration: `none`,
}

const navUl = {
    display: `flex`,
    listStyle: `none`
}

const navH1 = {
    fontFamily: `"Lobster", cursive`,
    fontWeight: `lighter`,
    color: `white`,
    fontSize: `1.5rem`
}

const navLi = {
    paddingLeft: `10rem`,
    position: `relative`,
}

//........................................................................ Styling--1

//........................................................................ Logic--0 
//........................................................................ Logic--1

//........................................................................ Rendered--0 

const Nav = () => {
    return(
        <nav style={nav}>
            <Link style={navH1} to="/">Capture</Link>
            <ul style={navUl}>
                <li style={navLi}>
                    <Link style={navA} to="/">1. About Us</Link>
                </li>
                <li style={navLi}>
                    <Link style={navA} to="/work">2. Our Work</Link>
                </li>
                <li style={navLi}>
                    <Link style={navA} to="/contact">3. Contact Us</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
//........................................................................ Rendered--1

