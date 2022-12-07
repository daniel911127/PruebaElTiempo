import React from 'react';
import '../styles/components/Card.css';

export default function Card({ title, description, image }) {
  return (
    <div className='container-card'>
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
      <div className='image'>
        <img src={image} alt=''></img>
      </div>
    </div>
  );
}
