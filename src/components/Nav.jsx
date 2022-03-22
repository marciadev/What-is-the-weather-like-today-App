import React from 'react';
import Logo from '../assets/sunny-.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom'


export default function Nav({ onSearch }) {
  return (
    <nav className="nav">
      <Link to='/'>
        <span className="span">
          <img src={Logo} width="50px" height="40px" className="nav" alt="" />
          Weather App
        </span>
      </Link>
      <Link to='/about'>
        <span className="span"> About </span>
      </Link>
      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

