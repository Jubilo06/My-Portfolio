import React from 'react'
import { useState } from 'react'
import {Stack, Typography, Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styles from './Skills.module.css'
import { useContext } from 'react'
import { Usercontext } from './UserProvider'


function Skills() {
    const {contextValue}=useContext(Usercontext);
    const [expanded, setExpanded]= useState(true);
    const handleChange=(isExpanded, panel)=>{
        setExpanded(isExpanded? panel:true)
    }
  return (
        <Stack direction='column' spacing={2} className={styles.skillStack} paddingLeft={{xs:'12px', sm:'8px'}}>
            <Stack ><Typography variant='h4' sx={{textAlign:'center', color:'ivory'}}>My Skills</Typography></Stack>
            <Stack direction='row' spacing={1} className={styles.contain} width={{xs:'300px', sm:'initial'}} >
                <Stack direction='column' className={styles.frontend}>
                    <Accordion expanded={expanded==="panel1"} onChange={(event, isExpanded)=>handleChange(isExpanded,"panel1")}>
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
                    <Accordion expanded={expanded==="panel2"} onChange={(event, isExpanded)=>handleChange(isExpanded,"panel2")}>
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