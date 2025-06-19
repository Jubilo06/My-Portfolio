import React from 'react'
import { Stack, Link, Icon, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import WhatsappIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedinIcon from '@mui/icons-material/Linkedin'
import GithubIcon from '@mui/icons-material/Github'
import styles from './About.module.css'
import profile2 from '../assets/profile2.png'
import { useContext } from 'react'
import { Usercontext } from './UserProvider'


function About(){
  const {contextValue}=useContext(Usercontext);
  return (
    <Stack className={styles.contain} spacing={2} p={1} direction={{xs:'column', sm:'column'}} justifyContent={{xs:'center',sm:'initial'}} width={{xs:'300px', sm:'initial'}}>
        <Stack direction={{xs:'column', sm:'row'}} justifyContent={{xs:'center',sm:'initial'}} spacing={{xs:1, sm:18}} marginTop={{xs:'0',sm:'initial'}}>
            <Stack direction={{xs:'row', sm:'column'}} width={{xs:'300px',sm:'initial'}} paddingLeft={{xs:'40px',sm:'initial'}} spacing={2} className={styles.iconStack}>
                <Link component='a' href='https://wa.me/2348133834904'><Icon><FacebookIcon /></Icon></Link>
                <Link component='a' href='https://wa.me/2348133834904'><Icon><WhatsappIcon color='success' /></Icon></Link>
                <Link component='a' href='https://wa.me/2348133834904'><Icon><XIcon htmlColor='#000'/></Icon></Link>
                <Link component='a' href='https://wa.me/2348133834904'><Icon><InstagramIcon htmlColor='#C13584' /></Icon></Link>
                <Link component='a' href='https://wa.me/2348133834904'><Icon><LinkedinIcon htmlColor='#0A66C2' /></Icon></Link>
                <Link component='a' href='https://wa.me/2348133834904'><Icon><GithubIcon htmlColor='black' /></Icon></Link>   
            </Stack>
            <Stack direction={{xs:'row', sm:'column'}} width={{xs:'300px',sm:'initial'}} paddingTop={{xs:'5px', sm:"initial"}}  className={styles.intro} >
                <p>
                    Amusan Temiloluwa <br /> Frontend web developer
                </p>
            </Stack>
            <Stack direction='column' spacing={4} p={{xs:'initial', sm:3}} className={styles.aboutme} paddingLeft={{xs:"5px", sm:'initial'}} width={{xs:'300px',sm:'initial'}}>
                <Stack className={styles.imgcon} width={{xs:'250px',sm:'initial'}}><img src={profile2} alt='hero' width='auto' height='400px'/></Stack>
            </Stack>
            
        </Stack>
        <Stack direction='column' className={styles.writeup} spacing={2}  width={{xs:'300px',sm:'initial'}} height={{xs:'150px', sm:'initial'}} sx={{fontSize:{xs:'10px',sm:'initial'}}}  overflow='auto'>
            <Typography className={styles.writeupWord} sx={{fontSize:{xs:'10px',sm:'initial'}, paddingTop:{xs:'10px', sm:'initial'}, color:{xs:'ivory', sm:'ivory'}}} >About me <br/> <br/>
                Hello World, I am Amusan Temiloluwa, a passionate and dedicated web developer with a love for building innovative and effective digital solutions. I'm driven by a passion for problem-solving and a desire to create digital experiences that are both functional and beautiful. I believe in writing clean, efficient code and staying up-to-date with the latest trends and technologies
            </Typography>
        </Stack>
    </Stack>
  )
}

export default About