import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import Chart from '../components/Chart';
import '../styles/pages/_report.scss';

export const Report = ({searchKey}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/products?q='+ searchKey)
    .then(resp => resp.json())
    .then(data =>{

        setProducts(data)
   })
  },[searchKey]);

  return (
    <section id='report'>
      <div className='report-container'>
        <h1><FormattedMessage id="units"/></h1>
        <Chart
          data = {products}

        />
      </div>
    </section>
  );
};
