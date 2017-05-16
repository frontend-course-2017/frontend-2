import React from 'react';
import Filter from './Filters';
import Cards from './Cards';
import { Content } from './styled';

const products = [
  {
    price: '$170',
    imgSrc: '/images/shoe_1.jpg',
    link: '/sports/shoes/shoe-1/',
    sale: true,
    id: 1,
  },
  {
    price: '$240.99',
    imgSrc: '/images/shoe_2.jpg',
    link: '/sports/shoes/shoe-1/',
    sale: false,
    id: 2,
  },
  {
    price: '$1024',
    imgSrc: '/images/shoe_3.jpg',
    link: '/sports/shoes/shoe-1/',
    sale: false,
    id: 3,
  },
  {
    price: '$170',
    imgSrc: '/images/shoe_1.jpg',
    link: '/sports/shoes/shoe-1/',
    sale: false,
    id: 4,
  },
  {
    price: '$240.99',
    imgSrc: '/images/shoe_2.jpg',
    link: '/sports/shoes/shoe-1/',
    sale: true,
    id: 5,
  },
  {
    price: '$1024',
    imgSrc: '/images/shoe_3.jpg',
    link: '/sports/shoes/shoe-1/',
    sale: false,
    id: 6,
  },
];

export default () => (
  <Content>
    <Filter />
    <Cards items={products} />
  </Content>
);

