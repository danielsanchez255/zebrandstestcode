import React, { useState } from 'react';

//Components
import Button from '../../components/button/Button';
import Cards from '../../components/cards/Cards';
import Input from '../../components/input/Input';
import Navbar from '../../components/navbar/Navbar';

//Styles
import './Repositories.css';

const Repositories = () => {

  const [search, setSearch] = useState('');

  return (
    <div className="container mt-5 text-center">
      <Navbar />
      <h1>Github Repositories</h1>
      <div className="searchBar">
        <Input placeholder={'Search a repository'} setSearch={setSearch} />
        <Button search={search} />
      </div>
      <Cards />
    </div>
  );
}

export default Repositories;