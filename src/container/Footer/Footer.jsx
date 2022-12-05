import React from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'

import { images } from '../../constants';
import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding ' id='login'> 
   <FooterOverlay />
   <Newsletter />

   <div className='app__footer-links'>
     <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact us</h1>
          <p className='p__opensans'>Saint Louis, eastern Parkway, Brooklyn NY, 33033</p>
          <p className='p__opensans'>+1 942-344-1230</p>
          <p className='p__opensans'>+1 942-555-1230</p>

     </div>
     <div className='app__footer-links-logo'>
         <img src={images.gericht}  alt='footer_logo'/>
         <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others"</p>
         <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop: 15}}/>
         <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
         </div>
    
     </div>

     <div className='app__footer-links_work'>

     <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'> Monday-Friday</p>
          <p className='p__opensans'>09:00 am - 12:00 pm</p>
          <p className='p__opensans'>Saturday-Sunday</p>
          <p className='p__opensans'>12:00 am  - 02:00 pm</p>
     </div>
   </div>
    <div className='footer__copyright'>
        <p className='p__opensans'> &copy; 2022 Diallo. All Rights Reserved</p>
    </div>

  </div>
);

export default Footer;
