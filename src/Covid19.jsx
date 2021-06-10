import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Navbar from './Navbar';
import Home from './Home';

import Join from './Join';


const Covid19 = () => {

return (
        <>
        <div className='main'>
        <div className='brand_name'>
        <div className='svg'>
         <Link to=''> <img src='./healthify.svg' alt=''/></Link>
          </div>
          <div className='logos'>
          <ul>
          
              <li> <Link to='' className='main_logos'><FacebookIcon /></Link></li>
                <li><Link to='' className='main_logos'><InstagramIcon /></Link></li>
                <li><Link to='' className='main_logos'><LinkedInIcon /></Link></li>
                <li><Link to='' className='main_logos'><GitHubIcon /></Link></li>
                </ul>
          </div>
          </div>
          <Navbar />
           <Switch>
             <Route path='/' exact ><Home /></Route>
             
             <Route path='/join' exact><Join /></Route>
            
           </Switch>
        
           
         

          </div>
       
          
        </>
    )
}

export default Covid19
