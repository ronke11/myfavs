/**
 * @description: component that displays individual page within each image
 */

import React, { useState, useEffect, useData } from 'react';
import {DataContext} from '../contexts/DataContext.jsx';
import {useLocation} from "react-router-dom";


function InnerPageDisplay(props) {
  // get path and return relevant information from data
  const {pathname} = useLocation();

  //get updated state

  //get specific object for this path:
  // const index = pathname.slice(1);
  // // const { image, title, website } = data[index];

  // const data = props.giveme;
  // console.log(data);
  // const number = num[0];

  return (
    <div>
      <div className="header">
        <h2>My Favorite Thing</h2>
      </div>

    </div>
    )
};


export default InnerPageDisplay;