import React from 'react';

import {Link} from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'

import LandingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'

import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'


import './styles.css'

function Landing() {
    return (
        <div id="landing-pages">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="proffy" />
                    <h2> sua plataforma de estudos online</h2>
                </div>

                <img
                    src={LandingImg}
                    alt="plataforma de estudos"
                    className="hero-image"
                />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="estudar"/> Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="estudar"/> Dar aulas
                    </Link>
                </div>
                <span className="total-connections">total de 200 conexões já realizadas

                    <img 
                        src={purpleHeartIcon} 
                        alt="coração roxo"
                    />

                </span>
            </div>
        </div>
    );
}

export default Landing