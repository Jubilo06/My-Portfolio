import React from 'react'
import Nav from './Nav';
import MobileDrawer from './MobileDrawer'
import { Button, Drawer, IconButton,Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import styles from './Nav.module.css'
import { useState, useContext } from 'react';
import { Usercontext } from './UserProvider';

function PortDrawer() {
    const [open, setOpen] = useState(false);
    const {activesection }=useContext(Usercontext);
    
    return (
        <Stack className={styles.NavStack} sx={{position:{xs:'initial', sm:'fixed'}, top:{xs:'initial', sm:0}}} >
            <Stack direction='row' sx={{background:'background: linear-gradient(to bottom, #032B44,#212121) ;'}}>
                <Stack>
                    <IconButton
                        variant="text"
                        onClick={()=>setOpen(true)}
                        sx={{ display: { xs: "block", sm: "none", md:'none',lg:'none' }, marginTop:'20px' }}
                    >
                        <MenuIcon htmlColor='ivory' />
                    </IconButton>
                </Stack>
                <Stack className={styles.logoStack} sx={{ display: { xs: "flex", sm: "none", md:'none',lg:'none' } }} >
                    <svg >
                    <text x="55%" y="20%" dy=".45em" text-anchor="middle">
                                jubilo
                        </text>
                    </svg>
                </Stack>
            </Stack>
            
            
            <Stack sx={{background:'background: linear-gradient(to bottom, #032B44,#212121)'}} >
                <Drawer
                    open={open}
                    anchor='left'
                    onClose={()=>setOpen(false)}
                    sx={{
                    display: { xs: "inherit", sm: "none" },}}
                    
                >
                    <Stack direction='row' width='100%'>
                        <Stack><MobileDrawer open={open} setOpen={setOpen} /></Stack>
                        <Stack sx={{background:'background: linear-gradient(to bottom, #032B44,#212121)'}}>
                            <IconButton
                                variant="text"
                                onClick={()=>setOpen(false)}
                                sx={{ display: { xs: "block", sm: "none", md:'none',lg:'none' }, marginTop:'20px' }}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                    </Stack>
                    
                </Drawer>
            </Stack>
            <Nav sx={{display: { xs: "none", sm: "inherit" }, position:{xs:'initial', sm:'sticky'},top:{xs:'initial', sm:0}}}/>
        </Stack>
    );
}; 

export default PortDrawer