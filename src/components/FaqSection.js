import React, {useState} from 'react';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';


//........................................................................ Styling--0 

const faqLayout = {
    minHeight: `90vh`,
    display: `block`,
    alignItems: `center`,
    justifyContent: `space-between`,
    padding: `5rem 10rem`,
    color: `white`,
}

const faqSpan = {
    display: `block`,
}

const faqH2 = {
    paddingBottom: `2rem`,
    fontWeight: `lighter`,
}

const faqAnswer = {
    padding: `2rem 0rem`,
}

const faqAnswerP = {
    padding: `0rem`,
}

//........................................................................ Styling--1

//........................................................................ Logic--0 
//........................................................................ Logic--1

//........................................................................ Rendered--0 
const FaqSection = () => {
    return (
        <div style={faqLayout} className="faq">
            <h2 style={faqH2}>Any Questions <span style={faqSpan}>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title={"How Do I Start"}>
                
                    <div style={faqAnswer} className="answer">
                        <p style={faqAnswerP}>
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo!
                        </p>
                    </div>
                
            </Toggle>
            <Toggle title={"Daily Schedule"}>
                
                    <div style={faqAnswer} className="answer">
                        <p style={faqAnswerP}>
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo!
                        </p>
                    </div>
                
            </Toggle>
            <Toggle title={"Different Payment Methods"}>
                
                    <div style={faqAnswer} className="answer">
                        <p style={faqAnswerP}>
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo!
                        </p>
                    </div>
                
            </Toggle>
            <Toggle title={"What Products Do You Offer"}>
                
                    <div style={faqAnswer} className="answer">
                        <p style={faqAnswerP}>
                            Lorem ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo!
                        </p>
                    </div>
                
            </Toggle>
            </AnimateSharedLayout>
        </div>
    )
}

export default FaqSection;
//........................................................................ Rendered--1