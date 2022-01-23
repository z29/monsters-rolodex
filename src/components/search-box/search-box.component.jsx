import React from 'react';

import './search-box.styles.css'

//if you dont think you need state or lifecyle, just use a functional component
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search" 
        type='search' 
        placeholder = {placeholder} 
        onChange={handleChange}
    />
);