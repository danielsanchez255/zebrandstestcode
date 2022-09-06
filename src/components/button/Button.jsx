import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { fetchGitRepositories, fetchGitUsers } from '../../slices/githubSlice.js'

//Styles
import styled from "styled-components";

const ButtonStyled = styled.button`
self-align: center;
color: white;
font-size: 1em;
border: 2px solid black;
border-radius: 20px;
background-color: black;
`;

const Button = ({ search }) => {

  const dispatch = useDispatch();
  const location = useLocation();

  const searchHandler = () => {
    if (location.pathname === '/') dispatch(fetchGitUsers(search));
    if (location.pathname === '/repositories') dispatch(fetchGitRepositories(search));
  }

  return (
    <ButtonStyled onClick={() => searchHandler()}>Search</ButtonStyled>
  );
}

export default Button;