import React from 'react';
import home1 from '../img/home1.png';


//........................................................................ Styling--0 
const About = {
    minHeight: `90vh`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `space-between`,
    padding: `5rem 10rem`,
    color: `white`,
}

const Description = {
    flex: 1,
    paddingRight: `5rem`,
}

const DescriptionH2 = {
    fontWeight: `lighter`,
}

const Image = {
    flex: 1, 
    overflow: `hidden`,
}

const IMG = {
    width: `100%`,
    height: `80vh`,
    objectFit: `cover`
}

const Hide = {
    overflow: `hidden`,
}
//........................................................................ Styling--1

//........................................................................ Logic--0

//........................................................................ Logic--1

//........................................................................ Rendered--0
const AboutSection = () => {
    return (
        <div style={About}>
            <div style={Description} className="description">
                <div className="title">
                    <div style={Hide}>
                        <h2 style={DescriptionH2}>We work to make</h2>
                    </div>
                    <div style={Hide}>
                        <h2 style={DescriptionH2}>your <span>dreams</span> come</h2>
                    </div>
                    <div style={Hide}>
                        <h2 style={DescriptionH2}>true.</h2>
                    </div>
                </div>
                <p>Contact us for any photography or videography ideas 
                    that you have. We have professionals with amazing skills
                </p>
                <button>Contact Us</button>
            </div>
            <div style={Image} className="image">
                <img style={IMG} src={home1} alt="guy with a camera" />
            </div>
        </div>
    )
}

export default AboutSection;
//........................................................................ Rendered--1