import React from 'react'
import { useState, useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import {Stack, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styles from './Skills.module.css'
import { useContext } from 'react'
import { Usercontext } from './UserProvider'


function Skills() {
    const {contextValue}=useContext(Usercontext);
    const [expanded, setExpanded] = useState({
    panel1: true,
    panel2: true,
    });
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])

    
    const handleChange=(panel)=>(event, isExpanded)=>{
       setExpanded({
      ...expanded, // Copy the current state of all panels
      [panel]: isExpanded, // Update the state for the specific panel that was changed
        });
    }
    
  return (
        <Stack direction='column' spacing={2} data-aos="zoom-in" my={2} className={styles.skillStack}  mt={{md:-6}} width={{xs:"100%", sm:"100%", md:"100%"}} minHeight={{xs:400}} >
            <Stack >
                <Typography variant='h4' sx={{textAlign:'center', color:'ivory'}}>My Skills<br/></Typography>
                <Typography fontSize={{xs:"18px", sm:"25px", md:"25px",lg:"25px"}} width={{xs:"100%", sm:"100%", md:"100%", lg:"100%"}}  sx={{color:"ivory", textAlign:"center"}} justifySelf={{xs:"center", sm:"center", md:"center"}} alignSelf={{xs:"center", sm:"center", md:"center"}}>This showcase a diverse range of Frontend and Backend skills with a commitment to continuous learning and mastery</Typography>
            </Stack>
            <Stack direction='row' spacing={1} className={styles.contain} >
                <Stack direction='column' className={styles.frontend}>
                    <Accordion expanded={expanded.panel1} onChange={handleChange('panel1')}>
                        <AccordionSummary id='panel1-header' aria-controls='panel1-content' expandIcon={<ExpandMoreIcon htmlColor='#0818A8'/>}>
                            <Typography variant='h6' sx={{color:'#0818A8'}}>
                                Frontend
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            
                            <ul>
                                <li>HTML</li>  
                                <li>CSS</li>
                                <li>SCSS</li>
                                <li>Javascript</li>
                                <li>ReactJS</li>
                                <li>React MUI</li>
                                <li>React Redux</li>
                                <li>SEO Optimization</li>
                            </ul>
                           
                        </AccordionDetails>
                    </Accordion>
                </Stack>
                <Stack direction='column' className={styles.backend}>
                    <Accordion expanded={expanded.panel2} onChange={handleChange('panel2')}>
                        <AccordionSummary id='panel2-header' aria-placeholder='Frontend' aria-controls='panel2-content' expandIcon={<ExpandMoreIcon htmlColor='#0818A8'/>}>
                            <Typography variant='h6' sx={{color:'#0818A8'}}>
                                Backend
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            
                            <ul>
                                <li>Python</li>
                                <li>Flask</li>
                                <li>Django</li>
                                <li>NodeJS</li>
                                <li>MongoDB</li>
                                <li>Postgres</li>
                            </ul>
                           
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </Stack>
        </Stack>
  )
}

export default Skills