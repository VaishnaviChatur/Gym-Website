import React from 'react'
import Home from '../Home/Home'
import About from '../../molucules/AboutInfo/About'
import Training from '../../molucules/TrainingProgram/Training'
import FirstPageTeam from '../../molucules/Team/FirstPageTeam'
import PrincipalSection from '../../molucules/Principal/PrincipalSection'
import Footer from '../../molucules/Footer/Footer'
import Navbar from '../../molucules/Navbar/Navbar'

function MainPage() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Training/>
        <FirstPageTeam/>
        <PrincipalSection/>
        <Footer/>
    </div>
  )
}

export default MainPage