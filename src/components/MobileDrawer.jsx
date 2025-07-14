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
import { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';


function MobileDrawer({open, setOpen, id}) {
    const {activesection, setActivesection}=useContext(Usercontext);
    const sections = [
        { id: 'home', title: 'Home' },
        { id: 'about', title: 'About me' },
        { id: 'skill', title: 'Skills' },
        { id: 'project', title: 'Projects' },
        { id: 'contact', title: 'Contact' },
    ];
    const scrollToSection=(id)=>{
        console.log('Attempting to scroll to section with ID:', id);
        const element=document.getElementById(id);
        if(element){
          element.scrollIntoView({
            behavior: 'smooth', 
            block:'start'
          });
        }else{
            console.error(`Element with the ID '${id} not found in the DOM`)
        }
        setActivesection(id)
    }
    
    const { ref, inView } = useInView({
      threshold: 0.5, // Adjust this value to your preference
    });
  
    useEffect(() => {
      if (inView) {
        setActivesection(id);
      }
    }, [inView, id, setActivesection]);
    
    const handleNavLinkClick = (id) => {
        console.log("The id I received is:", id);
        scrollToSection(id)
        setOpen(false);
         setTimeout(() => {
            scrollToSection(id);
        }, 300);
    };
  return (
    <Stack direction='column' display={{sm:"none"}} paddingBottom={{xs:0}} className={styles.wrapper}  p={{xs:1}} minHeight={{xs:900, sm:'initial'}} width={{xs:250, sm:660, md:"initial"}}>
        <Stack className={styles.logoStack} my={{xs:0,sm:0}} height={{xs:'80px',sm:'80px'}}>
            <svg> 
                <text x="40%" y="60%" dy=".10em" text-anchor="middle">
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
                {sections.map((section)=> {console.log('Data for this button:', section);
                return (
                   <Button key={section.id} id={section.id}  onClick={()=>handleNavLinkClick(section.id)} sx={{color:'white'}} className={styles.link}>{section.title}</Button> );
                })}
            </Stack>
        </Stack>
        
    </Stack>
  )
}

export default MobileDrawer