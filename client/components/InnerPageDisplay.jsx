/**
 * @description: component that displays individual page within each image
 */

import React, { useState, useEffect, useData } from 'react';
import {DataContext} from '../contexts/DataContext.jsx';
import {useLocation} from "react-router-dom";


function InnerPageDisplay(props) {
  // get path and return relevant information from data
  const {pathname} = useLocation();


  return (
    <div>
      <div className="header">
        <h2>My Favorite Thing</h2>
      </div>

    </div>
    )
};


export default InnerPageDisplay;