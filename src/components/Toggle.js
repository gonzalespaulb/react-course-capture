import React, {useState} from 'react';
import { motion } from 'framer-motion';


const faqLine = {
    background: `#cccccc`,
    height: `0.2rem`,
    margin: `2rem 0rem`,
    width: `100%`
}

const faqQuestion = {
    padding: `3rem 0rem`,
    cursor: `pointer`,
}

const Toggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false);
    return(
        <motion.div layout style={faqQuestion} onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>
                {title}
            </motion.h4>
            {toggle ? children : ""}
            <div style={faqLine} className="faq-line"></div>
        </motion.div>
    )
}

export default Toggle;