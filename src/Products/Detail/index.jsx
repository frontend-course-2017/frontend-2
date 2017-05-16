import React from 'react';

import BuyButton from './BuyButton';
import Description from './Description';
import Thumbnails from './Thumbnails';
import Image from './Image';
import Price from './Price';
import ColorSelector from './ColorSelector';
import SaveButton from './SaveButton';
import Heading from './Heading';
import SaleBadge from '../../components/SaleBadge';
import { Product } from './styled';

const product = {
  price: '170$',
  imgSrc: '/images/shoe_detail.jpg',
  thumbnails: [
    {
      src: '/images/thumbnail_1.jpg',
      id: 1,
      active: false,
    },
    {
      src: '/images/big_shoe.jpg',
      id: 2,
      active: false,
    },
    {
      src: '/images/thumbnail_2.jpg',
      id: 3,
      active: false,
    },
    {
      src: '/images/thumbnail_3.jpg',
      id: 4,
      active: true,
    },
  ],
  name: 'ULTRA BOOST',
  colors: [
    {
      name: 'Silver',
      code: '#c5c5c5',
      id: 1,
    },
    {
      name: 'Havelock blue',
      code: '#4d87ca',
      id: 2,
    },
    {
      name: 'Gainsboro',
      code: '#e0e0e0',
      id: 3,
    },
    {
      name: 'Charcoal',
      code: '#4a4a4a',
      id: 4,
    },
  ],
  description: 'Adidas is a German multinational corporation, ' +
  'headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.',
  sale: true,
};

export default () => (
  <Product>
    <Heading>{product.name}</Heading>
    <SaveButton />
    <ColorSelector colors={product.colors} />
    <SaleBadge sale={product.sale} />
    <Price>{product.price}</Price>
    <Image src={product.imgSrc} />
    <Thumbnails srcs={product.thumbnails} />
    <Description>{product.description}</Description>
    <BuyButton />
  </Product>
);
