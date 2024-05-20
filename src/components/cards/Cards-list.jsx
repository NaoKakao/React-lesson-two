import React from 'react'
import Card from './Card';
import json from '../../data/heros.json';

function CardList() {
  return (
    <React.Fragment>
      <div className="cards-list">
        {
          json.map((i) => (
            <Card key={i.id} name={i.name} universe={i.universe} alterego={i.alterego} occupation={i.occupation} friends={i.friends} superpowers={i.superpowers} url={i.url} info={i.info}/> 
          ))}
      </div>
    </React.Fragment>
  );
}

export default CardList;