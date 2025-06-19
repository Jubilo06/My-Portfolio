import React from 'react'
import {Button, Stack, Typography} from '@mui/material'
import styles from "./Nav.module.css"
import {NavLink} from 'react-router-dom'
import { useState, useContext } from 'react'
import { Usercontext } from './UserProvider'




function Nav({...props}) {
  const sections = [
    { id: 'home', title: 'Home' },
    { id: 'about', title: 'About' },
    { id: 'skill', title: 'Skills' },
    { id: 'project', title: 'Projects' },
    { id: 'contact', title: 'Contact' },
  ];
  const {activesection, setActivesection }=useContext(Usercontext);
  const handleNavLinkClick = (id) => {
    const element=document.getElementById(id)
    if(element){
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <Stack className={styles.NavStack} spacing={1} overflow='visible'
    
    direction={{ xs: "column", sm: "row" }}
    ml={{ xs: 0, sm: 0 }}
    mt={{ xs: 1, sm: 0 }}
    width={{ xs: "300px", sm: "initial" }}
    height={{xs:'400px', sm:'100px'}}
    sx={{borderRadius:{xs:'10px', sm:'initial'}, position:{xs:'initial', sm:'fixed'},top:{xs:'initial', sm:0}, display:{xs:'initial', sm:'sticky'}}}
    {...props}
    >
        <Stack className={styles.logoStack} height={{xs:'80px', sm:'250px'}} paddingTop={{xs:'20px', sm:'initial'}} >
          <svg >
            <text x="40%" y="10%" dy=".50em" text-anchor="middle">
			          jubilo
		        </text>
          </svg>
        </Stack>
        <Stack className={styles.linkStack} direction={{ xs: "column", sm: "row" }} spacing={{xs:1, sm:6}} p={{NavLinks:0,sm:1}}>
        
          {sections.map((section) => (
            <Button
              key={section.id}
              onClick={()=>handleNavLinkClick(section.id)}
              sx={{
                color: 'white',
                fontWeight: activesection === section.id ? 'bold' : 'normal',
                textDecoration: activesection === section.id ? 'underline' : 'none',
                textUnderlineOffset: '6px',
                transition: 'font-weight 0.2s, text-decoration 0.2s',
                mx: 1,
              }}
            >
              {section.title}
            </Button>
          ))}
        
        </Stack>
    </Stack>
  )
}


export default Nav;