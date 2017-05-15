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

const product = {
  price: '170$',
  imgSrc: '/images/shoe_detail.jpg',
  thumbnails: [
    {
      src: '/images/thumbnail_1.jpg',
      id: 1,
    },
    {
      src: '/images/big_shoe.jpg',
      id: 2,
    },
    {
      src: '/images/thumbnail_2.jpg',
      id: 3,
    },
    {
      src: '/images/thumbnail_3.jpg',
      id: 4,
    },
  ],
  name: 'ULTRA BOOST',
  colors: [
    {
      className: 'color-selector-button-silver',
      name: 'Silver',
      id: 1,
    },
    {
      className: 'color-selector-button-havelock-blue',
      name: 'Havelock blue',
      id: 2,
    },
    {
      className: 'color-selector-button-gainsboro',
      name: 'Gainsboro',
      id: 3,
    },
    {
      className: 'color-selector-button-charcoal',
      name: 'Charcoal',
      id: 4,
    },
  ],
  description: 'Adidas is a German multinational corporation, ' +
  'headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.',
  sale: true,
};

export default () => (
  <section className="content">
    <div className="product">
      <Heading text={product.name} />
      <SaveButton />
      <ColorSelector colors={product.colors} />
      <SaleBadge sale={product.sale} className={'product-sale-badge'} />
      <Price value={product.price} />
      <Image src={product.imgSrc} />
      <Thumbnails srcs={product.thumbnails} />
      <Description text={product.description} />
      <BuyButton />
    </div>
  </section>
);
