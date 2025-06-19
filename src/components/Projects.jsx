import React from 'react'
import { Stack, Typography, Link} from '@mui/material'
import bookseller from '../assets/bookseller.png'
import cardealer from '../assets/cardealer.png'
import quizapp from '../assets/quizapp.png'
import calculator from '../assets/calculator.png'
import tictactoe from '../assets/tictactoe.png'
import styles from './Projects.module.css'
import todo from '../assets/todo.png'
import recipe from '../assets/recipe.png'
import ProjectSlide from './ProjectSlide'



function Projects() {
  return (
    <Stack direction='column' spacing={2} p={2} height={{xs:'400px', sm:'initial'}}>
        <Stack><Typography variant='h4' sx={{textAlign:'center', color:'ivory'}}>My Projects</Typography></Stack>
        <Stack height={{xs:'350px', sm:'initial'}}><ProjectSlide /></Stack>
    </Stack>
  )
}

export default Projects