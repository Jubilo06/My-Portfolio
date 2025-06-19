import React from 'react'
import { Stack, Grid, Typography, TextField, Icon } from '@mui/material'
import { useForm, ValidationError } from '@formspree/react';
import styles from './FormTesting.module.css'
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function NewForm() {
    const [state, handleSubmit] = useForm("xkgrorpk");
        if (state.succeeded) {
          return <p>Message sent successfully✔</p>;
        }
    return (
        <Stack direction='column' className={styles.wrapper} spacing={2}>
            <Typography variant='h4' p={1} sx={{ textAlign: 'center', color: 'blue',minWidth:0 }}  flexWrap={1}>
                Get in Touch
            </Typography>
            <Typography className={styles.typo} variant='body2'  sx={{color:'blue',minWidth:0, textAlign:'center', textWrap:'wrap'}}>
                Thank you for visiting my portfolio website. I'm excited to hear from you and explore potential opportunities. Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to chat.
            </Typography>
            <Stack sx={{ my: 1, mx: 'auto', p: 2 }} spacing={2} direction={{ xs: 'column', md: 'row' }}>
                <Stack xs={12} sm={6} md={4}>
                    <Stack direction='column' spacing={1}>
                        <Stack direction='row' spacing={1}>
                            <Stack p={1}>
                                <PhoneIcon fontSize='large' htmlColor='blue' />
                            </Stack>
                            <Stack direction='column'>
                                <Typography sx={{ color: 'blue' }}>Call Me</Typography>
                                <Typography sx={{ color: 'blue' }}>+2348133834904</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={1}>
                            <Stack p={1}>
                                <MailOutlineIcon fontSize='large' htmlColor='blue' />
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <Typography sx={{ color: 'blue' }}>E-mail</Typography>
                                <Typography sx={{ color: 'blue' }}>amusantemiloluwa06@gmail.com</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction='row' spacing={1}>
                            <Stack p={1}>
                                <LocationOnIcon fontSize='large' htmlColor='blue' />
                            </Stack>
                            <Stack direction='column' spacing={1}>
                                <Typography sx={{ color: 'blue' }}>Location</Typography>
                                <Typography sx={{ color: 'blue' }}>Nigeria</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack xs={12} sm={6} md={8}>
                    <Stack className={styles.FormStack} padding={2}>
                        <form onSubmit={handleSubmit}>
                            <Stack direction='column' spacing={4}>
                                <Stack direction='column' spacing={1}>
                                    <Stack>
                                        <TextField label='E-mail Address' id="email" type="email" name="email" variant='outlined' color='warning' fullWidth />
                                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                                    </Stack>
                                    <Stack>
                                        <TextField label='Message' id='message' name='message' variant='outlined' color='warning' fullWidth />
                                        <ValidationError prefix="Message" field="message" errors={state.errors} />
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
        </Stack>
    );
};
export default NewForm