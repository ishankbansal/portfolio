import React from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'

// const Sample = () => {
//     return(
//         <div>
//             <h1>I am Sample</h1>
//         </div>
//     )
// }

const App = () => {
    return (

            <div>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/skills' element={<Skills/>}/>
                </Routes>
            </div>

    );
};

export default App;