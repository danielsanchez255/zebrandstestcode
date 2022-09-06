import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

//Styles
import styled from "styled-components";

const Button = styled.button`
position: fixed;
top: 10px;
right: 10px;
background-color: transparent;
color: white;
font-size: 1em;
border: 2px solid white;
border-radius: 3px;
z-index: 999;
`;

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();

  return (
    location.pathname === '/' ? 
          <Button className="" onClick={() => navigate('/repositories')}>Search repositories</Button>
        : 
          location.pathname === '/repositories' ? 
            <Button onClick={() => navigate('/')}>Search users</Button>
          : 
            ''     
  );
}

export default Navbar;