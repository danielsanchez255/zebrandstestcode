import React from 'react';

//Styles
import './Input.css';

const Input = ({ placeholder, setSearch }) => {

  return (
    <input className="inputSearch" placeholder={placeholder} onChange={(e) => setSearch(e.target.value)}></input>
  );
}

export default Input;