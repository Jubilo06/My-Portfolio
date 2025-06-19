import React from 'react'
import { Stack } from '@mui/material'
import Nav from './Nav'
import About from './About'
import FormTesting from './FormTesting'
import Projects from './Projects'
import Skills from './Skills'
import styles from './Home.module.css'
import PortDrawer from './PortDrawer'
import  { Waypoint }  from 'react-waypoint';
import { useLocation } from 'react-router-dom'
import Aos from 'aos'
import { useEffect, useState, useContext } from 'react'
import 'aos/dist/aos.css'
import { Usercontext } from './UserProvider'
import { UserProvider } from './UserProvider'



function Home() {
  const {activesection, setActivesection}=useContext(Usercontext);
  const handleSectionInView = (sectionId) => {
    setActivesection(sectionId);
  };
  return (
    <div className={styles.wrapper}>
      <UserProvider>
        <section id='home' data-aos='slide-up'><PortDrawer /></section>
        <section id='about' data-aos='slide-up' ><About /></section>
        <section id='skills' data-aos='slide-up'><Skills /></section>
        <section id='project' data-aos='slide-up'><Projects /></section>  
        <section id='contact' data-aos='slide-up'><FormTesting /></section>
      </UserProvider>   
    </div>
  )
}

export default Home