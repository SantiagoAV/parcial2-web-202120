import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import { FormattedMessage } from 'react-intl';
import '../styles/pages/_home.scss';

export const Home = ({ searchKey }) => {
  const [products, setProducts] = useState([]);
 
useEffect(() => {
    fetch('http://localhost:3001/api/products?q='+ searchKey)
    .then(resp => resp.json())
    .then(data =>{

        setProducts(data)

    })

  },[searchKey]);

  return (
    <section id='home'>
      <div className='home-container'>
        <h1><FormattedMessage id="gallery"/></h1>
        <div className='home-card'>
        {products && products.map((product)=>(
          <Card
            name={product.name}
            picture={product.picture}
            price={product.price}
            isActive={product.isActive}
          />
        ))}
        </div>
      </div>
    </section>
  );
};
