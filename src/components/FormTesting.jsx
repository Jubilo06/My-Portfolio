import React from 'react'
import { Stack, Typography, TextField, Icon } from '@mui/material'
import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import styles from './FormTesting.module.css'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function FormTesting() {
    const [state, handleSubmit] = useForm("xkgrorpk");
    if (state.succeeded) {
      return <p>Message sent successfully✔</p>;
    }
    useEffect(()=>{
            Aos.init({duration:2000})
    },[])
  return (
    <Stack direction='column' data-aos="zoom-in" className={styles.wrapper} p={{xs:1,sm:5}} spacing={{xs:1, sm:2}} width={{xs:"100%", sm:"100%", md:"100%"}} minHeight={{xs:600}}>
        <Typography variant='h4' p={1}  sx={{textAlign:'center', color:'ivory'}} >Get in Touch</Typography>
        <Typography className={styles.typo} variant='body1' paddingLeft={{xs:"30px",sm:'10px'}}>Thank you for visiting my portfolio website. I'm excited to hear from you and explore potential oppotunities. Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to chat</Typography>
        <Stack direction={{xs:'column', sm:'column',md:'row'}} alignSelf="center" justifySelf="center" width={{xs:'100%',sm:700, md:800}} spacing={{xs:3, sm:5, md:5}} my={6} p={{xs:0,sm:1}} sx={{backgroundColor:'transparent', justifyContent:{sm:"center"}, alignItems:{sm:"center"}}}>
            <Stack direction='column' spacing={1} sx={{backgroundColor:'transparent'}} paddingLeft={{xs:"0px",sm:'initial'}} width={{xs:'300px',sm:'initial'}}>
                <Stack direction='row' spacing={1}>
                    <Stack p={1}>
                        <PhoneIcon fontSize='large' htmlColor='ivory' />
                    </Stack>
                    <Stack direction='column'>
                        <Typography sx={{color:'ivory', fontSize:"20px"}}>Call Me</Typography>
                        <Typography sx={{color:'ivory',fontSize:"18px"}}>+2348133834904</Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <Stack p={1}>
                        <MailOutlineIcon fontSize='large' htmlColor='ivory' />
                    </Stack>
                    <Stack direction='column' spacing={1}>
                    <Typography sx={{color:'ivory', fontSize:"20px"}}>E-mail</Typography>
                    <Typography sx={{color:'ivory', fontSize:{xs: 15, sm:18}}}>amusantemiloluwa06@gmail.com</Typography> 
                    </Stack>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <Stack p={1}>
                        <LocationOnIcon fontSize='large' htmlColor='ivory'/>
                    </Stack>
                    <Stack direction='column' spacing={1}>
                    <Typography sx={{color:'ivory', fontSize:"20px"}}>Location</Typography>
                    <Typography sx={{color:'ivory', fontSize:"20px"}}>Nigeria</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack className={styles.FormStack}  width={{xs:"260px", sm:"500px"}} sx={{justifySelf:{xs:"center",sm:"center", md:"center"},alignSelf:{xs:"center",sm:"center", md:"center"}}} p={{xs:2}}>
                <form  onSubmit={handleSubmit}>
                    <Stack direction='column' spacing={4}  sx={{backgroundColor:'ivory', width:{xs:"250px",sm:"400px"}, justifySelf:{xs:"center"},alignSelf:{xs:"center"}, height:"220px", marginTop:"20px"}}>
                        <Stack direction='column' spacing={1} p={1}>
                            <Stack className={styles.field}>
                                <TextField label='e-mail address'   sx={{'& .MuiInputLabel-root':{color:'grey', fontStyle:'italic', fontSize:'25px'}}} id="email" type="email" name="email" variant='outlined' color='warning'  />
                                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                            </Stack>
                            <Stack >
                                <TextField label='message' id='message' name='message' sx={{'& .MuiInputLabel-root':{color:'grey', fontStyle:'italic', fontSize:'25px'}}} variant='outlined' color='warning' />
                                <ValidationError prefix="message" field="message" errors={state.errors}/>
                            </Stack>
                        </Stack>
                        <Stack>
                            <button type="submit" disabled={state.submitting} className={styles.submitButton}>Submit</button>
                        </Stack>
                    </Stack>
                </form>
            </Stack>
        </Stack>
    </Stack>
  )
}

export default FormTesting