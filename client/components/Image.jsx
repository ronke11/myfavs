/**
 * @description presentation component for an image
 */

 import React from 'react';

 function Image(props) {
   return (
    <div className='image'>
      <img src={props.url} title={props.title}/>
    </div>
   )

 }



export default Image;