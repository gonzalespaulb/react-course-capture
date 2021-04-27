import React from 'react';
import {Link} from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';

//........................................................................ Styling--0

const work = {
    minHeight: `100vh`,
    overflow: `hidden`,
    padding: `5rem 10rem`,
    background: `#ffffff`,
}

const movie = {
    paddingBottom: `10rem`,
}

const movieH2 = {
    padding: `1rem 0rem`,
    color: `#333`
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
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={work}>
            <div style={movie} className="movie">
                <h2 style={movieH2}>The Athlete</h2>
                <div style={line} className="line"></div>
                <Link to="/work/the-athlete">
                    <img style={img} src={athlete} alt="athlete"/>
                </Link>
            </div>

            <div style={movie} className="movie">
                <h2 style={movieH2}>The Racer</h2>
                <div style={line} className="line"></div>
                <Link to="/work/the-racer">
                    <img style={img} src={theracer} alt="theracer"/>
                </Link>
            </div>

            <div style={movie} className="movie">
                <h2 style={movieH2}>Good Times</h2>
                <div style={line} className="line"></div>
                <Link to="/work/good-times">
                    <img style={img} src={goodtimes} alt="goodtimes"/>
                </Link>
            </div>
        </motion.div>
    )
}

export default OurWork;
  //........................................................................ Rendered--1