import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {AboutLayout, DescriptionLayout, ImageLayout} from '../styleComponents';

//........................................................................ Styling--0 

const servicesH2 = {
    paddingBottom: `5rem`,
}

const servicesP = {
    width: `70%`,
    paddingTop: `2rem 0rem 4rem 0rem`,
}

const cards = {
    display: `flex`,
    flexWrap: `wrap`,
}

const card = {
    flexBasis: `20rem`,
}

const cardIcon = {
    display: `flex`,
    alignItems: `center`,
}

const cardH3 = {
    marginLeft: `1rem`,
    background: `white`,
    color: `black`,
    padding: `1rem`,
}

//........................................................................ Styling--1

//........................................................................ Logic--0 

//........................................................................ Logic--0 

//........................................................................ Rendered--0 

const ServicesSection = () => {
    return(
        <div style={AboutLayout} className="services">
            <div style={DescriptionLayout} className="description">
                <h2 style={servicesH2}>High <span>quality</span> service.</h2>
                <div style={cards} className="cards">
                    <div style={card} className="card">
                        <div style={cardIcon} className="icon">
                            <img src={clock} alt="icon"/>
                            <h3 style={cardH3}>Efficient</h3>
                        </div>
                        <p style={servicesP}>
                            Lorem ipsum, dolor sit amet.
                        </p>
                    </div>
                    <div style={card} className="card">
                        <div style={cardIcon} className="icon">
                            <img src={diaphragm} alt="icon"/>
                            <h3 style={cardH3}>Diaphragm</h3>
                        </div>
                        <p style={servicesP}>
                            Lorem ipsum, dolor sit amet.
                        </p>
                    </div>
                    <div style={card} className="card">
                        <div style={cardIcon} className="icon">
                            <img src={money} alt="icon"/>
                            <h3 style={cardH3}>Affordable</h3>
                        </div>
                        <p style={servicesP}>
                            Lorem ipsum, dolor sit amet.
                        </p>
                    </div>
                    <div style={card} className="card">
                        <div style={cardIcon} className="icon">
                            <img src={teamwork} alt="icon"/>
                            <h3 style={cardH3}>Teamwork</h3>
                        </div>
                        <p style={servicesP}>
                            Lorem ipsum, dolor sit amet.
                        </p>
                    </div>
                </div>
            </div>
            <div style={ImageLayout} className="image">
                <img src={home2} alt="camera"/>
            </div>
        </div>
    )
}

export default ServicesSection;

//........................................................................ Rendered--0 