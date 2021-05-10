import React from 'react';
import home1 from '../img/home1.png';
import {AboutLayout, DescriptionLayout, ImageLayout} from '../styleComponents';
import { motion } from 'framer-motion';
import {titleAnim, fade, photoAnim} from '../animation';
import Wave from './Wave';


//........................................................................ Styling--0 

const descriptionH2 = {
    fontWeight: `lighter`,
}

const img = {
    width: `100%`,
    height: `80vh`,
    objectFit: `cover`
}

const hide = {
    overflow: `hidden`,
}
//........................................................................ Styling--1

//........................................................................ Logic--0

//........................................................................ Logic--1

//........................................................................ Rendered--0
const AboutSection = () => {


    return (
        <div style={AboutLayout}>
            <div style={DescriptionLayout} className="description">
                <motion.div className="title">
                    <div style={hide}>
                        <motion.h2 variants={titleAnim}  style={descriptionH2}>We work to make</motion.h2>
                    </div>
                    <div style={hide}>
                        <motion.h2 variants={titleAnim}  style={descriptionH2}>your <span>dreams</span> come</motion.h2>
                    </div>
                    <div style={hide}>
                        <motion.h2 variants={titleAnim}  style={descriptionH2}>true.</motion.h2>
                    </div>
                </motion.div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas 
                    that you have. We have professionals with amazing skills
                </motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </div>
            <div style={ImageLayout} className="image">
                <motion.img variants={photoAnim} style={img} src={home1} alt="guy with a camera" />
            </div>
            <Wave/>
        </div>
    )
}
export default AboutSection;
//........................................................................ Rendered--1