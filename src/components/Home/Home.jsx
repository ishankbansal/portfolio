import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeAnime from './../../assets/home_anime.gif';
import './Home.css';
// import Modal from './../Modal/Modal'

class Home extends Component {

    state = { showModal: false };

    componentDidMount() {
        setTimeout(() => {
            this.setState({ showModal: true });
        }, 1000);
    }

    closeModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        return (
            <div className='home-container'>
                {/* {this.state.showModal && <Modal closeModal={this.closeModal} />} */}
                <div className='header-text'>
                    <h1>Welcome to my portfolio!</h1>
                    <p><h2>Hi, I am Ishank Bansal</h2> A final year undergrad who is really passionate about problem-solving and loves to build crazy stuff! </p>
                </div>
                <div className='head-btns'>
                    <Link to='/about' className='btn btn-white'>
                        <p className='btn-text'>Know more about me</p>
                    </Link>
                    <Link to='/contact' className='btn btn-transparent'>
                        <p className='btn-text'>Connect with me</p>
                    </Link>
                </div>
                <div className='splash-image'>
                    <img
                        src={homeAnime}
                        alt='animation'
                        className='home-anime'
                    />
                </div>
            </div>
        );
    }
}

export default Home;