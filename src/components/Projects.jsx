import React from 'react'
import { useEffect } from 'react'
import { Stack, Typography, Link} from '@mui/material'
import bookseller from '../assets/bookseller.png'
import cardealer from '../assets/cardealer.png'
import quizapp from '../assets/quizapp.png'
import calculator from '../assets/calculator.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import tictactoe from '../assets/tictactoe.png'
import styles from './Projects.module.css'
import todo from '../assets/todo.png'
import recipe from '../assets/recipe.png'
import ProjectSlide from './ProjectSlide'



function Projects() {
  useEffect(()=>{
        Aos.init({duration:2000})
  },[])
  return (
    <Stack direction='column' data-aos="zoom-in" spacing={2} p={2} minHeight={{xs:450}} height={{ sm:'initial'}}  width="100%">
        <Stack direction="column">
          <Typography variant='h4' sx={{textAlign:'center', color:'ivory'}}>My Projects<br/></Typography>
          <Typography width={{xs:"100%", sm:"100%", md:"100%", lg:"100%"}} fontSize={{xs:"18px", sm:"25px", md:"25px",lg:"25px"}} sx={{color:"ivory", textAlign:"center"}} justifySelf={{xs:"center", sm:"center", md:"center"}} alignSelf={{xs:"center", sm:"center", md:"center"}} >A collection of projects that demonstrate my skills and experience. From concept to completion, each project showcases my problem solving abilities and attention to detail</Typography>
        </Stack>
        <Stack height={{xs:'350px', sm:'initial'}}><ProjectSlide /></Stack>
    </Stack>
  )
}

export default Projects