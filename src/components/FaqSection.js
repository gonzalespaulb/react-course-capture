import React from 'react';

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
            <div style={faqQuestion} className="question">
                <h4>How do I start?</h4>
                <div style={faqAnswer} className="answer">
                    <p style={faqAnswerP}>
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo!
                    </p>
                </div>
                <div style={faqLine} className="faq-line"></div>
            </div>
            <div style={faqQuestion} className="question">
                <h4>Daily Schedule</h4>
                <div style={faqAnswer} className="answer">
                    <p style={faqAnswerP}>
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo!
                    </p>
                </div>
                <div style={faqLine} className="faq-line"></div>
            </div>
            <div style={faqQuestion} className="question">
                <h4>Different Payment Methods</h4>
                <div style={faqAnswer} className="answer">
                    <p style={faqAnswerP}>
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo!
                    </p>
                </div>
                <div style={faqLine} className="faq-line"></div>
            </div>
            <div style={faqQuestion} className="question">
                <h4>What Products Do You Offer?</h4>
                <div style={faqAnswer} className="answer">
                    <p style={faqAnswerP}>
                        Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo!
                    </p>
                </div>
                <div style={faqLine} className="faq-line"></div>
            </div>
        </div>
    )
}

export default FaqSection;
//........................................................................ Rendered--1