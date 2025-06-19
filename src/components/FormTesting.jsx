import React from 'react'
import { Stack, Typography, TextField, Icon } from '@mui/material'
import { useForm, ValidationError } from '@formspree/react';
import styles from './FormTesting.module.css'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';


function FormTesting() {
    const [state, handleSubmit] = useForm("xkgrorpk");
    if (state.succeeded) {
      return <p>Message sent successfully✔</p>;
    }
  return (
    <Stack direction='column' className={styles.wrapper} p={{xs:1,sm:'initial'}} spacing={{xs:1, sm:2}} width={{xs:'300px', sm:'830px'}}>
        <Typography variant='h4' p={1}  sx={{textAlign:'center', color:'ivory'}} width={{xs:'300px',sm:'initial'}}>Get in Touch</Typography>
        <Typography className={styles.typo} variant='body2' paddingLeft={{xs:"30px",sm:'10px'}} maxWidth={{xs:'250px', sm:'initial'}}>Thank you for visiting my portfolio website. I'm excited to hear from you and explore potential oppotunities. Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to chat</Typography>
        <Stack direction={{xs:'column', sm:'row'}} width={{xs:'300px',sm:'inherit'}} spacing={3} my={6} p={{xs:0,sm:1}} sx={{backgroundColor:'transparent'}}>
            <Stack direction='column' spacing={1} sx={{backgroundColor:'transparent'}} paddingLeft={{xs:"0px",sm:'initial'}} width={{xs:'300px',sm:'initial'}}>
                <Stack direction='row' spacing={1}>
                    <Stack p={{xs:1, sm:1}}>
                        <PhoneIcon sx={{fontSize:{xs:'medium', sm:'large'}}} htmlColor='ivory' />
                    </Stack>
                    <Stack direction='column'>
                        <Typography sx={{color:'ivory', fontSize:{xs:"14px",sm:'initial'}}}>Call Me</Typography>
                        <Typography sx={{color:'ivory',fontSize:{xs:"14px",sm:'initial'}}}>+2348133834904</Typography>
                    </Stack>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <Stack p={1}>
                        <MailOutlineIcon sx={{fontSize:{xs:'medium', sm:'large'}}} htmlColor='ivory' />
                    </Stack>
                    <Stack direction='column' spacing={1}>
                    <Typography sx={{color:'ivory', fontSize:{xs:"14px",sm:'initial'}}}>E-mail</Typography>
                    <Typography sx={{color:'ivory', fontSize:{xs:"14px",sm:'initial'}}}>amusantemiloluwa06@gmail.com</Typography> 
                    </Stack>
                </Stack>
                <Stack direction='row' spacing={1}>
                    <Stack p={1}>
                        <LocationOnIcon sx={{fontSize:{xs:'medium', sm:'large'}}} htmlColor='ivory'/>
                    </Stack>
                    <Stack direction='column' spacing={1}>
                    <Typography sx={{color:'ivory', fontSize:{xs:"14px",sm:'initial'}}}>Location</Typography>
                    <Typography sx={{color:'ivory', fontSize:{xs:"14px",sm:'initial'}}}>Nigeria</Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack className={styles.FormStack}  width={{xs:'240px', sm:'400px'}} p={{xs:2}}>
                <form  onSubmit={handleSubmit}>
                    <Stack direction='column' spacing={4} width={{xs:"250px", sm:'400px'}} sx={{backgroundColor:'transparent', justifyContent:{xs:'center', sm:'center'}}}>
                        <Stack direction='column' spacing={1} width={{xs:"200px"}} p={{xs:3,sm:'initial'}} sx={{paddingLeft:{xs:'20px', sm:'80px'}}}>
                            <Stack width={{xs:"200px"}} className={styles.field}>
                                <TextField label='e-mail address' sx={{'& .MuiInputLabel-root':{color:'grey', fontStyle:'italic', fontSize:'10px'}}} id="email" type="email" name="email" variant='outlined' color='warning'  />
                                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                            </Stack>
                            <Stack width={{xs:"200px"}}>
                                <TextField label='message' id='message' name='message' sx={{'& .MuiInputLabel-root':{color:'grey', fontStyle:'italic', fontSize:'10px'}}} variant='outlined' color='warning' />
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