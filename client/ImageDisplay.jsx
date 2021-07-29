/**
 * @description presentation component that displays images using React-Grid-Layout
 * //Grid Layout: x & y for axis positions and w & h for width/height in grid units
 */

import React, { useState, useEffect } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
import Image from './Image.jsx';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime"

const ReactGridLayout = WidthProvider(RGL);


function ImageDisplay(props) {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

// get images from server
// result is an array of our data objects, so just get the objects

  useEffect(async () => {
    try {
    const result = await axios.get('http://localhost:3000/data');
    setData(result.data);
    }
    catch (err){
      if (err) return ("Error: ", err)
    }
  }, []);


// to create the output in render

  //layout variables
  const layout = [];
  const cols = 8; // total grid width
  const w = 2; // grid item width
  const rowHeight = 80; // total grid height
  const h = 2; //Math.ceil(Math.random() * 2) + 1 // grid item height
  const output = [];

  // function createLayout () {

  // create layout: array of objects with each obj = the layout for an image
  for (let i = 0; i < data.length; i++) {
      layout.push({
       'i': i.toString(),
        x: (i * w) % cols,
        y: Math.floor(i / (cols/w)) * h,
        w: w,
        h: h,
        maxW: 2,
        maxH: 2,
    });

    //generate divs for each image
    let { image } = data[i];
    output.push(<div key={i}> <Image url={image}/> </div>)
  };


  return (
    <ReactGridLayout className="layout" layout={layout} cols={cols} rowHeight={rowHeight} width={1200} isResizeable={true}>
      {output}
    </ReactGridLayout>
  )
};

export default ImageDisplay;