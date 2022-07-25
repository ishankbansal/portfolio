import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me'
                quoteIntro = 'To iterate is human, to recurse is divine!'
            />

            <div className='about-main'>
                <div className='about-main-left'>

                    <h2 className='about-sub-head'>Competitive Programmer</h2>
                    <p className='about-details'>
                        Being an enthusiast of problem-solving, I am 4 Star on Codechef and Specialist on Codeforces. 
                        Recently, secured <b>260 global rank</b> in October Cook-Off 2021.<br/>
                        Check
                        out{' '}
                        <a
                            className='about-link-element'
                            href='http://theleanprogrammer.com/aam'
                            target="blank"
                        >
                            my coding profiles!
                        </a>
                    </p>

                    <h2 className='about-sub-head'>Frontend Developer</h2>
                    <p className='about-details'>
                    I believe working on front-end side of a web application is my cup of tea, 
                    these skills combined with my problem solving abilities will help me to make an impact in tech! <br/>
                    Check out{' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/ishankbansal/'
                            target="blank"
                        >
                            my open-source projects!
                        </a>
                    </p>

                    {/* <h3 className='about-sub-head'>Public Speaker</h3>
                    <p className='about-details'>
                        Being a passionate public speaker, I've given talks at
                        more than 75 events till now! Want me to speak in your
                        event?{' '}
                        <a
                            className='about-link-element'
                            href='mailto:ishankbansal1111@gmail.com'
                        >
                            Email me the details!
                        </a>
                    </p> */}
                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />

            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
