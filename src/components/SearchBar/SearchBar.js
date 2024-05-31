import React from 'react';
import './SearchBar.scss';
import SearchIcon from '../../assets/icons/search.svg';

function SearchBar(){
    return(
        <form>
            <input className='search-bar' placeholder="Search" type="text" name="Search" />
        </form>
    );
}

export default SearchBar;