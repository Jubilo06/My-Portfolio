import React from 'react'
import { Stack, Link, Icon, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import XIcon from '@mui/icons-material/X'
import WhatsappIcon from '@mui/icons-material/WhatsApp'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedinIcon from '@mui/icons-material/Linkedin'
import GithubIcon from '@mui/icons-material/Github'
import Aos from 'aos'
import 'aos/dist/aos.css'
import styles from './About.module.css'
import profile2 from '../assets/profile2.png'
import { useContext, useEffect } from 'react'
import { Usercontext } from './UserProvider'


function About(){
  const {contextValue}=useContext(Usercontext);
  useEffect(()=>{
      Aos.init({duration:2000})
  },[])
  return (
    <Stack className={styles.contain} data-aos="zoom-in" my={{xs:1, sm:5, md:7}} spacing={2} marginLeft={{xs:'initial', sm:'10px'}} p={{xs:1, sm:1}}  direction={{xs:'column', sm:'column'}} justifyContent={{xs:'center',sm:'initial'}} width={{xs:'100%', sm:"100%", md:"100%"}} minHeight={{xs:700}}>
        <Stack direction={{xs:'column', sm:'row'}} justifySelf={{xs:"center", sm:"center", md:"center"}} alignSelf={{xs:"center", sm:"center", md:"center"}} width={{xs:'initial', sm:'100%'}} justifyContent={{xs:'center',sm:'initial',md:"center"}} alignItems={{md:"center"}} p={{sm:2, md:"initial"}} spacing={{xs:1, sm:9, md:20}} marginTop={{xs:'0',sm:'initial'}}>
            <Stack direction={{xs:'row', sm:'column'}} width={{xs:'300px',sm:'initial'}} paddingLeft={{xs:'40px',sm:'initial'}} spacing={2} className={styles.iconStack}>
                <Link component='a' href='https://www.facebook.com/profile.php?id=100007386554971'><Icon><FacebookIcon /></Icon></Link>
                <Link component='a' href='https://wa.me/2348133834904'><Icon><WhatsappIcon color='success' /></Icon></Link>
                <Link component='a' href='https://x.com/jubiloforever?t=4AcX2si_9wGVx5J-2UWL1g&s=09'><Icon><XIcon htmlColor='#000'/></Icon></Link>
                <Link component='a' href='https://www.instagram.com/tml_bliss?igsh=YzljYTk10Dg3Zg=='><Icon><InstagramIcon htmlColor='#C13584' /></Icon></Link>
                <Link component='a' href='https://www.linkedin.com/in/temiloluwa-amusan-749b134b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><Icon><LinkedinIcon htmlColor='#0A66C2' /></Icon></Link>
                <Link component='a' href='https://github.com/Jubilo06'><Icon><GithubIcon htmlColor='black' /></Icon></Link>   
            </Stack>
            <Stack direction={{xs:'row', sm:'column'}} className={styles.typewriter} width={{xs:'300px',sm:'initial'}} paddingTop={{xs:'5px', sm:"initial"}} justifyContent={{xs:"center", sm:"center", md:"center"}} alignItems={{xs:"center", sm:"center", md:"center"}} >
                <Typography sx={{textAlign:"center"}} className={styles.typewritertext} fontSize={{xs:"18px", sm:"25px", md:"25px",lg:"25px"}} justifySelf={{xs:"center", sm:"center", md:"center"}} alignSelf={{xs:"center", sm:"center", md:"center"}}>
                    Amusan Temiloluwa <br /> Frontend web developer
                </Typography>
            </Stack>
            <Stack width={{xs:'250px',sm:'initial'}} justifySelf={{xs:"center"}} alignSelf={{xs:"center"}}><img src={profile2} loading='lazy' alt='hero' width='auto' height='400px'/></Stack>
            
            
        </Stack>
        <Stack direction='column' className={styles.writeup} spacing={2}  width={{xs:"80%",sm:670, md:800}} height={{xs:300, sm:'initial'}} sx={{fontSize:{xs:'18px',sm:'25px', md:"30px", lg:"30px"}, justifySelf:"center", alignSelf:"center"}} m={{xs:'initial', sm:3, md:2}}  p={{xs:'initial', sm:3}}   overflow='auto'>
            <Typography className={styles.writeupWord} justifySelf='center' alignSelf='center' sx={{fontSize:{xs:'16px',sm:'20px'}, paddingTop:{xs:'10px', sm:'initial'}, color:{xs:'#0E1428', sm:'#0E1428', md:"#0E1428"}}} >About me <br/> <br/>
                Hello, I am Amusan Temiloluwa, a passionate and dedicated web developer with a love for building innovative and effective digital solutions. I'm driven by a passion for problem-solving and a desire to create digital experiences that are both functional and beautiful. I believe in writing clean, efficient code and staying up-to-date with the latest trends and technologies
            </Typography>
        </Stack>
    </Stack>
  )
}

export default About