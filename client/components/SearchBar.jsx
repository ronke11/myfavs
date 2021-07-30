/**
 * @description: searches our titles
 */
 import React from 'react';


 const SearchBar = (props) => {
 return(
  <form className='searchForm' onSubmit={() => {props.submitSearch}}>
    <input type="search" placeholder="Search Favs..." onChange={(e) => props.getSearchValue(event.target.value)}/>
    <button className='button'>Submit</button>
  </form>
  );
}

export default SearchBar;
