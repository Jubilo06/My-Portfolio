import React from 'react'
import { Stack,Typography, Link } from '@mui/material'
import styles from './Projects.module.css'
import bookseller from '../assets/bookseller.png'
import cardealer from '../assets/cardealer.png'
import quizapp from '../assets/quizapp.png'
import calculator from '../assets/calculator.png'
import tictactoe from '../assets/tictactoe.png'
import todo from '../assets/todo.png'
import recipe from '../assets/recipe.png'
export default function ProjectSlide() {
  return (
    <Stack className={styles.wrapper}>
        <Stack direction='row' className={styles.newSlide} spacing={1}>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography variant='h5' sx={{color:'#0818A8'}}>Calculator</Typography>
              <img src={calculator} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Todo App</Typography>
              <img src={todo} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Food Recipe App</Typography>
              <img src={recipe} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Car deal</Typography>
              <img src={cardealer} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Book store</Typography>
              <img src={bookseller} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Tictactoe Game</Typography>
              <img src={tictactoe} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Quiz App</Typography>
              <img src={quizapp} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Calculator</Typography>
              <img src={calculator} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Todo App</Typography>
              <img src={todo} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Food Recipe App</Typography>
              <img src={recipe} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Car deal</Typography>
              <img src={cardealer} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Book store</Typography>
              <img src={bookseller} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Tictactoe Game</Typography>
              <img src={tictactoe} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
          <Stack direction='column' className={styles.card} spacing={2}>
              <Typography sx={{color:'#0818A8'}}>Quiz App</Typography>
              <img src={quizapp} alt='calc' loading='lazy' width='200px' height='200px' />
              <Link className={styles.cardLink} underline='none' color='white'>View Project</Link>
          </Stack>
        </Stack>
    </Stack>
  )
};