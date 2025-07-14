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
        <Stack className={styles.NavStack} width={{xs:"100%", sm:"100%", md:"100%"}}   p={{xs:2}}  paddingLeft={{xs:0}} paddingTop={{xs:0}} sx={{position:{xs:'fixed', sm:'fixed'}, top:{xs:0, sm:0}}} >
            <Stack direction='row' display={{sm:'none'}} justifySelf={{xs:"center"}} width={{xs:"100%", sm:"100%", md:"100%"}} alignSelf={{xs:"center"}} sx={{background:'red'}}>
                <Stack>
                    <IconButton 
                        variant="text"
                        onClick={()=>setOpen(true)}
                        sx={{ display: { xs: "block", sm: "block", md:'none',lg:'none' }, marginTop:'20px' }}
                    >
                        <MenuIcon htmlColor='ivory' />
                    </IconButton>
                </Stack>
                <Stack className={styles.logoStacking} flexGrow={{xs:1}} justifySelf={{xs:'center', sm:'center', md:'center'}} width={{xs:"initial", sm:40}} alignSelf={{xs:"center", sm:'center', md:'center'}} sx={{ display: { xs: "flex", sm: "none", md:'none',lg:'none' } }} >
                    <svg >
                        <text x="52%" y="15%" dy=".95em" text-anchor="middle">
                                jubilo
                        </text>
                    </svg>
                </Stack>
            </Stack>
            
            
            <Stack justifySelf={{xs:'center'}} alignSelf={{xs:"center"}} sx={{background:'background: linear-gradient(to bottom, #032B44,#212121)'}} >
                <Drawer
                    open={open}
                    anchor='left'
                    onClose={()=>setOpen(false)}
                    sx={{
                    display: { xs: "inherit", sm: "none" },}}
                    
                >
                    <Stack direction='row' width='100%'>
                        <Stack><MobileDrawer open={open} setOpen={setOpen} /></Stack>
                        <Stack height={{xs:"100%"}} flexGrow={1} sx={{background: 'linear-gradient(to bottom, #032B44,#212121)'}}>
                            <IconButton
                                variant="text"
                                onClick={()=>setOpen(false)}
                                sx={{ display: { xs: "block", sm: "none", md:'none',lg:'none' }, marginTop:'20px' }}
                            >
                                <CloseIcon htmlColor='white' fontSize='large' />
                            </IconButton>
                        </Stack>
                    </Stack>
                    
                </Drawer>
            </Stack>
            <Nav sx={{display: { xs: "none",sm:"inherit" }, position:{xs:'initial', sm:'sticky'},top:{xs:'initial', sm:0}}}/>
        </Stack>
    );
}; 

export default PortDrawer