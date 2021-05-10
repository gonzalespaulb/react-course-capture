import React from 'react';
import {Link} from 'react-router-dom';
import athlete from '../img/athlete-small.png';
import theracer from '../img/theracer-small.png';
import goodtimes from '../img/goodtimes-small.png';
import {motion} from 'framer-motion';
import {pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer} from '../animation';


//........................................................................ Styling--0

const work = {
    minHeight: `100vh`,
    overflow: `hidden`,
    padding: `5rem 10rem`,
    background: `#ffffff`
    
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
    background: `#23d997`,
    marginBottom: `3rem`
}

const img = {
    width: `100%`,
    height: `70vh`,
    objectFit: `cover`,
}

const hide = {
    overflow: `hidden`,
}

const Frame1 = {
    position: `fixed`,
    left: 0,
    top: `10%`,
    width: `100%`,
    height: `100vh`,
    background: `#fffebf`,
    zIndex: 2,
}

const Frame2 = {
    position: `fixed`,
    left: 0,
    top: `10%`,
    width: `100%`,
    height: `100vh`,
    background: `#ff8efb`,
    zIndex: 2,
}

const Frame3 = {
    position: `fixed`,
    left: 0,
    top: `10%`,
    width: `100%`,
    height: `100vh`,
    background: `#8ed2ff`,
    zIndex: 2,
}

const Frame4 = {
    position: `fixed`,
    left: 0,
    top: `10%`,
    width: `100%`,
    height: `100vh`,
    background: `#8effa0`,
    zIndex: 2,
}


//........................................................................ Styling--1

//........................................................................ Logic--0
//........................................................................ Logic--1


//........................................................................ Rendered--0
const OurWork = () => {
    return(
        <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={work}>
            <motion.div variants={sliderContainer}>
                <motion.div variants={slider} style={Frame1}></motion.div>
                <motion.div variants={slider} style={Frame2}></motion.div>
                <motion.div variants={slider} style={Frame3}></motion.div>
                <motion.div variants={slider} style={Frame4}></motion.div>
            </motion.div>
            <motion.div style={movie} className="movie">
                <motion.h2
                    style={movieH2}
                    variants={fade}>
                        The Athlete
                </motion.h2>
                <motion.div 
                    variants={lineAnim}
                    style={line} 
                    className="line">
                </motion.div>
                <Link to="/work/the-athlete">
                    <div style={hide}>
                        <motion.img 
                            variants={photoAnim}
                            style={img} 
                            src={athlete} 
                            alt="athlete"/>
                    </div>
                </Link>
            </motion.div>

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