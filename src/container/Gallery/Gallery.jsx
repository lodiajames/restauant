import React from 'react';

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs';
import { SubHeading } from '../../components';
import {images} from '../../constants'

import './Gallery.css';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery03, images.gallery04]

const Gallery = () => {

  const scrollRef = React.useRef(null)

  const scroll = (direction) =>{
    const {current} = scrollRef;

    if(direction ==='left'){
      current.scrollLeft -= 300
    }else{
       current.scrollLeft +=300
    }
  }

return(
  <div className='app__gallery flex__center'>
     <div className='app__gallery-content'>
         <SubHeading title="Instagram"/>
         <h1 className='headtext__cormorant'>Photo Gallery</h1>
         <p className='p__opensans' style={{color:'#AAA', marginTop:'2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vehicula tincidunt erat id semper. Sed suscipit ante quis velit pharetra, </p>
         <button type='button' className='custom__button'>View More</button>
     </div>

        <div className='app__gallery-images'>
          <div className='app__gallery-images_container' ref={scrollRef}>
               {galleryImages.map((image, index)=>(
                <div className='app__gallery-images_card flex__center' key={index }>
                    <img  src={image} alt='gallery'/>
                    <BsInstagram  className='gallery__image-icon'/>
                </div>
               ))}
          </div> 
             
             <div className='app__gallery-images_arrow'>
              <BsArrowLeftShort  className='gallery__arrow-icon' onClick={()=> scroll('left')}/>
              <BsArrowRightShort  className='gallery__arrow-icon' onClick={()=> scroll('right')}/>

             </div>
       
        </div>
  </div>
  
  )
};

export default Gallery;
