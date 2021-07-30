/**
 * @description: fetches our data & displays images using React-Grid-Layout
 * //Grid Layout: x & y for axis positions and w & h for width/height in grid units
 */

import React, { useContext, useEffect, useState } from 'react';
import RGL, { WidthProvider } from "react-grid-layout";
import Image from './Image.jsx';
import SearchBar from './SearchBar.jsx';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime"


const ReactGridLayout = WidthProvider(RGL);

function ImagesDisplay(props) {

  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect( () => {
      // const result = await axios.get('http://localhost:3000/data');
      fetch('http://localhost:3000/data')
      .then(res => res.json())
      .then(data => setData(data))
      .catch((err) => {
        return ("Error: ", err)
      })
  }, []);


  function getSearchValue(val) {
    let searchResult = [];
    const titlesObj = {};
    for (let i = 0; i < data.length; i++) {
      const {title} = data[i];
      titlesObj[i] = title;
    };

    const titles = Object.values(titlesObj);
    // // search titles
    for (let i = 0; i < titles.length; i++)
    {
      searchResult = [];
      const elem = titles[i];
      // if match is found
      if (elem.search(val) != -1) {
        searchResult.push(data[i]);
      }
    }
    console.log(searchResult);
  };

// to create the output in render
  //layout variables

  const layout = [];
  const cols = 8; // total grid width
  const w = 2; // grid item width
  const rowHeight = 220;
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
    let { image, title } = data[i];
    let click = "http://localhost:8080/"+i;
    output.push(
    <div key={i}>
      <a href={click}>
        <Image url={image} title={title}/>
      </a>
    </div>
    )};



  return (
    <div>
      <h1 className='header'>
        All My Favs
      </h1>

      <div className="topnav">
        <SearchBar getSearchValue={getSearchValue}/>
      </div>

      <div>
        <ReactGridLayout className="layout" layout={layout} cols={cols} rowHeight={rowHeight} width={1200} isResizeable={true}>
          {output}
        </ReactGridLayout>
     </div>
    </div>
  )
};


export default ImagesDisplay