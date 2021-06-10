import { NavLink } from 'react-router-dom'
import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useEffect } from 'react';
import { useRef } from 'react';

const Navbar = () => {
    
    const dropdownRef = useRef(null);
    const[showmenu, setshowmenu] = useState(false);

    useEffect(() =>{
         document.title='Healthify';

         const outsideClick = (e) =>{
                 if(dropdownRef.current !== null && !dropdownRef.current.contains(e.target)){
                     setshowmenu(!showmenu)
                 }
                }

                 if(showmenu){
                     window.addEventListener('click', outsideClick)
                 }
                 return () =>{
                     window.removeEventListener('click', outsideClick)
                 }
         
    }, [showmenu])

    const linkChange = (e) =>{
    e.preventDefault();
           
    };

    
    return (
        <>
          <div className='main_nav' id={showmenu ? 'hiddenmain' : 'hidden'} ref={dropdownRef}>
              <NavLink to='/'  exact activeClassName='active_links' className='main_links' onChange={linkChange}>Home</NavLink>
            
              <NavLink to='/join' exact activeClassName='active_links' className='main_links' onChange={linkChange}>Join</NavLink>
          </div>  
          <div className='burger-menu' onClick={() =>{
             setshowmenu(!showmenu) 
           }} >
             {showmenu ? <CloseIcon /> : <MenuIcon />}
           </div>
        </>
    )
}

export default Navbar
