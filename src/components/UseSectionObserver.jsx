import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import { Stack } from '@mui/material';
import { Usercontext } from './UserProvider';
 const UseSectionObserver = ({children, id}) => {
    const{setActivesection}= useContext(Usercontext);
    const { ref, inView } = useInView({
      triggerOnce:true,
      threshold: 0.5, // Adjust this value to your preference
    });
  
    useEffect(() => {
      if (inView) {
        setActivesection(id);
      }
    }, [inView, id, setActivesection]);
  
    return (
      <Stack ref={ref} id={id}>
        {children}
      </Stack>
    ); // The hook returns the ref to be used by the component
  };
  export default UseSectionObserver;