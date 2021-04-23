import React from 'react';

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
            <a style={navH1}>Capture</a>
            <ul style={navUl}>
                <li style={navLi}>
                    <a style={navA} href="#">1. About Us</a>
                </li>
                <li style={navLi}>
                    <a style={navA} href="#">2. Our Work</a>
                </li>
                <li style={navLi}>
                    <a style={navA} href="#">3. Contact Us</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;
//........................................................................ Rendered--1

