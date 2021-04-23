import React from 'react';
import {Link} from 'react-router-dom';

import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';

//........................................................................ Styling--0

const work = {
    minHeight: `100vh`,
    overflow: `hidden`,
    padding: `5rem 10rem`,
    background: `white`,
}

const movie = {
    paddingBottom: `10rem`,
}

const movieH2 = {
    padding: `1rem 0rem`,
}

const line = {
    height: `0.5rem`,
    background: `#cccccc`,
    marginBottom: `3rem`
}

const img = {
    width: `100%`,
    height: `70vh`,
    objectFit: `cover`,
}

//........................................................................ Styling--1

//........................................................................ Logic--0
//........................................................................ Logic--1


//........................................................................ Rendered--0
const OurWork = () => {
    return(
        <div style={work}>
            <div style={movie} className="movie">
                <h2 style={movieH2}>The Athlete</h2>
                <div style={line} className="line"></div>
                <Link>
                    <img style={img} src={athlete} alt="athlete"/>
                </Link>
            </div>

            <div style={movie} className="movie">
                <h2 style={movieH2}>The Racer</h2>
                <div style={line} className="line"></div>
                <Link>
                    <img style={img} src={theracer} alt="theracer"/>
                </Link>
            </div>

            <div style={movie} className="movie">
                <h2 style={movieH2}>Good Times</h2>
                <div style={line} className="line"></div>
                <Link>
                    <img style={img} src={goodtimes} alt="goodtimes"/>
                </Link>
            </div>
        </div>
    )
}

export default OurWork;
  //........................................................................ Rendered--1