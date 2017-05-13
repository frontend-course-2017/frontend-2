import React from 'react';
import Filter from './Filters';
import Items from './Items.js';

const products = [
  {
    price: '$170',
    imgSrc: './images/shoe_1.jpg',
    link: '/sports/shoes/shoe-1/',
    sale: true,
  },
  {
    price: '$240.99',
    imgSrc: './images/shoe_2.jpg',
    link: '/sports/shoes/shoe-2/',
    sale: false,
  },
  {
    price: '$1024',
    imgSrc: './images/shoe_3.jpg',
    link: '/sports/shoes/shoe-3/',
    sale: false,
  },
  {
    price: '$170',
    imgSrc: './images/shoe_1.jpg',
    link: '/sports/shoes/shoe-4/',
    sale: false,
  },
  {
    price: '$240.99',
    imgSrc: './images/shoe_2.jpg',
    link: '/sports/shoes/shoe-5/',
    sale: true,
  },
  {
    price: '$1024',
    imgSrc: './images/shoe_3.jpg',
    link: '/sports/shoes/shoe-6/',
    sale: false,
  },
];

export default () => (
  <section className="content">
    <Filter />
    <Items items={products} />
  </section>
);

