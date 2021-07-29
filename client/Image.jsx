/**
 * @description presentation component for an image
 */

 import React from 'react';

 function Image(props) {
   return (
    <div className='image'>
      <img src={props.url}/>
    </div>
   )

 }



export default Image;