import React from 'react';
import './SearchBar.scss';
import SearchIcon from '../../assets/icons/search.svg';

function SearchBar(){
    return(
        <form className='search-bar'>
            <input className='search-bar__input' placeholder="Search" type="text" name="Search" />
        </form>
    );
}

export default SearchBar;