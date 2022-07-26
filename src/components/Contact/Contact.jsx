import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import './Contact.css';
import contactVector from './../../assets/contact_anime.png';
import github from './../../assets/gh.png';
import linkedin from './../../assets/li.png';

const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading='Get in touch'
                details='Interested to collaborate? Feel free to drop me an email.'
            />

            <div className='contact-form-container'>
                <form className='contact-form'>

                    <input
                        type='email'
                        placeholder='Your Email ID'
                        name='email'
                        className='input-box email-input'
                        autoComplete='off'
                    />

                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>

                    <button type='submit' className='contact-btn'>
                        Send Email
                    </button>
                </form>
            </div>

            <div className='social-icons-container'>
                <a href='https://github.com/ishankbansal' target='blank' className='social-icon' >
                    <img src={github} alt='social' />
                </a>
                <a
                    href='https://www.linkedin.com/in/ishankbansal01/'
                    target='blank'
                    className='social-icon'
                >
                    <img src={linkedin} alt='social' />
                </a>
            </div>

            <FooterLink
                phrase='Read more '
                toAdress='/about'
                link='about me.'
            />

            <div className='vector-frame'>
                <img
                    src={contactVector}
                    alt='vector'
                    className='about-vector'
                />
            </div>
        </div>
    );
};

export default Contact;
