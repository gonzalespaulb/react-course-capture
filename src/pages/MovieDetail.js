import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../movieState';


import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';



//........................................................................ Styling--0

const details = {
    color: `white`
}

const headline = {
    minHeight: `90vh`,
    paddingTop: `20vh`,
    position: `relative`,
}

const headlineH2 = {
    position: `absolute`,
    top: `10%`,
    left: `50%`,
    transform: `translate(-50%, -10%)`
}

const headlineImg = {
    width: `100%`,
    height: `70vh`,
    objectFit: `cover`,
}

const awards = {
    minHeight: `80vh`,
    display: `flex`,
    margin:`5rem 10rem`,
    alignItems: `center`,
    justifyContent: `space-around`
}

const awardStyle = {
    padding: `5rem`,
}

const awardStyleH3 = {
    fontSize: `1.5rem`,
}

const awardStyleLine = {
    width: `100%`,
    background: `#23d997`,
    height: `0.5rem`,
    margin: `1rem 0rem`
}

const awardStyleP = {
    padding: `2rem 0rem`,
}

const imageDisplay = {
    minHeight: `50vh`,
}

const imageDisplayImg = {
    width: `100%`,
    height: `100vh`,
    objectFit: `cover`,
}

//........................................................................ Styling--1

const Awards = ({title, description}) => {
    return(
        <div style={awardStyle}>
            <h3 style={awardStyleH3}>{title}</h3>
            <div style={awardStyleLine} className="line">

            </div>
            <p style={awardStyleP}>{description}</p>
        </div>
    )
}

const MovieDetail = () => {

    const history = useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
        setMovie(currentMovie[0]);
      }, [movies, url]);

    return (
        <div>
            {movie && (
            <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={details}>
                <div style={headline}>
                    <h2 style={headlineH2}>
                        {movie.title}
                    </h2>
                    <img style={headlineImg} src={movie.mainImg} alt="movie"/>
                </div>
                <div style={awards} className="awards">
                    {movie.awards.map((award) => (
                        <Awards 
                            title={award.title} 
                            description={award.description} 
                            key={award.title}
                        />
                    ))}
                </div>
                <div style={imageDisplay} className="image-display">
                    <img style={imageDisplayImg} src={movie.secondaryImg} alt="movie"/>
                </div>
            </motion.div>
            )}
        </div>
    )
}

export default MovieDetail;