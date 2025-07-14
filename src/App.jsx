import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import FormTesting from "./components/FormTesting"; 
import Home from "./components/Home";
import NewForm from "./components/NewForm";
import PortDrawer from "./components/PortDrawer";
import './app.css'
import MobileDrawer from "./components/MobileDrawer";
import ErrorPage from "./components/ErrorPage";
import { UserProvider } from "./components/UserProvider";
import { Stack, useTheme, useMediaQuery, CssBaseline } from "@mui/material";
import  UseSectionObserver   from "./components/UseSectionObserver";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useContext } from "react";
import { Usercontext } from "./components/UserProvider";


function App() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  const Theme= useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down('md'));
  
  return (
    <UserProvider>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<ErrorPage/>}/>
          <Route path="/project" element={<Projects/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<FormTesting/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/nav" element={<PortDrawer/>}/>
        </Routes>
      </BrowserRouter> */}
      
      <Stack width="100%" spacing={2} sx={{justifyContent:'center'}} direction='column'>
        
        <Stack direction='column'>
            <UseSectionObserver id='home'>
               <PortDrawer />
            </UseSectionObserver> 
            <UseSectionObserver id="about" >
              <About   />
            </UseSectionObserver>
            <UseSectionObserver id="skill" >
              <Skills  />
            </UseSectionObserver>
            <UseSectionObserver id="project" >
              <Projects  />
            </UseSectionObserver>
            <UseSectionObserver id="contact" >
              <FormTesting  />
            </UseSectionObserver>
          </Stack> 
      </Stack>
         
    </UserProvider>
      
    
  )
}

export default App;
