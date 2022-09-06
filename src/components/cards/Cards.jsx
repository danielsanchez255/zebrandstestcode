import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Components
import Card from './card/Card';

//Styles
import styled from "styled-components";

const Row = styled.div`
margin-top: 55px; `;

const Spinner = styled.div`
display: block;
position: fixed;
z-index: 1031; 
top: 50%;
right: 50%; 
margin-top: -..px; 
margin-right: -..px; `;

const Cards = () => {

  const location = useLocation();
  const gitReducer = useSelector((state) => state.githubReducer);

  return (
    <Row className="row">
      {gitReducer.loading === false ?
        location.pathname === '/' ?
          gitReducer.itemsGitUsers.map((item) => (
            <div key={item.id} className="col-md-4">
              <Card item={item} />
            </div>
          ))
        : location.pathname === '/repositories' ?
            gitReducer.itemsGitRepositories.map((item) => (
              <div key={item.id} className="col-md-4">
                <Card item={item} />
              </div>
            ))
            : ''
      :
      <Spinner className="spinner-border text-light" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
      }
    </Row>
  );
}

export default Cards;