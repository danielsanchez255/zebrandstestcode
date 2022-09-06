import React from 'react';

//Styles
import './Card.css';


const Card = ({ item }) => {

  return (
    <div className="card mt-2">
      <div class="card-body">
        <h5 class="card-title">{ item.login || item.name }</h5>
        {item.description ?
          <p class="card-text">{ item.description }</p>
        :
          ''
        }
        
        <a href={item.html_url} className="link">Go to the link</a>
      </div>
    </div>
  );
}

export default Card;