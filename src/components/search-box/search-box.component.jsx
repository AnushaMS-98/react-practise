import React from 'react';
import './search-box.styles.css';

export const SearchBox =({placeholder,handleChange}) =>(
    <div class='centerin'>
    <input className ="search" type="Search" placeholder={placeholder}
        onChange={handleChange}/>
        </div>
);
//export default SearchBox;