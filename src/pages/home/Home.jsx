import React, { useState } from 'react';

//Components
import Button from '../../components/button/Button';
import Cards from '../../components/cards/Cards';
import Input from '../../components/input/Input';
import Navbar from '../../components/navbar/Navbar';

//Styles
import './Home.css';


const Home = () => {

  const [search, setSearch] = useState('');

  return (
    <div className="container mt-5 text-center">
      <Navbar />
      <h1>Github Users</h1>
      <div className="searchBar">
        <Input placeholder={'Search user'} setSearch={setSearch} />
        <Button search={search} />
      </div>
      <Cards />
    </div>
  );
}

export default Home;
