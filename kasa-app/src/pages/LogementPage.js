import React from 'react';
import logements from '../data/data.json';
import { useParams } from 'react-router-dom';

function LogementPage() {
    const params = useParams();
    const logement = logements.find((item) => item.id === params.id);
  return (
    <div>{logement.title} </div>
  )
}

export default LogementPage