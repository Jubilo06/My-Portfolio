import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';

const Usercontext= createContext();
function UserProvider({children}) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);
  const contextValue = {
    refresh: () => Aos.refresh(),
  };
  const SECTIONS_DATA = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skills', title: 'Skills' },
    { id: 'project', title: 'Projects' },
    { id: 'contact', title: 'Contact' }, // 5th section
  ];
  const [activesection, setActivesection]=useState(SECTIONS_DATA[0].id);  
  return (
    <Usercontext.Provider value={{activesection, setActivesection, contextValue}}>
        {children}
    </Usercontext.Provider>
  )
}

export  {UserProvider, Usercontext}