import React from 'react'
import {Stack, Typography, Button} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import styles from './MobileDrawer.module.css'
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import FormTesting from './FormTesting';
import { Usercontext } from './UserProvider';
import { useContext } from 'react';


function MobileDrawer({open, setOpen}) {
    const {activesection, setActivesection}=useContext(Usercontext);
    const sections = [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About me' },
        { id: 'skill', title: 'Skills' },
        { id: 'project', title: 'Projects' },
        { id: 'contact', title: 'Contact' },
    ];
    const scrollToSection=(id)=>{
        console.log('Attempting to scroll to section with ID:', sections.id);
        const element=document.getElementById(id);
        if(element){
          element.scrollIntoView({
            behavior: 'smooth', block:'start'
          });
        }
    }
    const handleNavLinkClick = (id) => {
        scrollToSection(id)
        setOpen(false);
    };
    console.log(sections.title);
  return (
    <Stack direction='column' className={styles.wrapper} height={{xs:'400px', sm:'initial'}} width={{xs:'300px', sm:"initial"}}>
        <Stack className={styles.logoStack} my={{xs:0,sm:0}} height={{xs:'80px',sm:'80px'}}>
            <svg >
                <text x="40%" y="20%" dy=".60em" text-anchor="middle">
                        jubilo
                    </text>
            </svg>
        </Stack>
        <Stack direction='row' spacing={{xs:1,sm:'initial'}} p={{xs:3,sm:'initial'}}>
            <Stack direction='column' spacing={2}>
                <Stack direction='row' spacing={{xs:2,sm:'initial'}}>
                    <HomeIcon htmlColor='#DFD0B8' fontSize='small' />
                </Stack>
                <Stack direction='row' spacing={{xs:2,sm:'initial'}}>
                    <PersonIcon htmlColor='#DFD0B8' />
                </Stack>
                <Stack  direction='row' spacing={{xs:2,sm:'initial'}}>
                    <AutoGraphIcon htmlColor='#DFD0B8' />
                </Stack>
                <Stack direction='row' spacing={{xs:2,sm:'initial'}}>
                    <WorkspacePremiumIcon htmlColor='#DFD0B8' />
                </Stack>
                <Stack direction='row' spacing={{xs:2,sm:'initial'}}>
                    <ContactMailIcon htmlColor='#DFD0B8' fontSize='small' />
                </Stack>
            </Stack>
            <Stack direction='column'>
                {sections.map((section)=>(
                   <Button key={section.id} id='section.id' onClick={()=>handleNavLinkClick(section.id)} sx={{color:'white'}} className={styles.link}>{section.id}</Button> 
                ))}
            </Stack>
        </Stack>
        
    </Stack>
  )
}

export default MobileDrawer