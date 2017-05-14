import React from 'react';

import BuyButton from './BuyButton';
import Description from './Description';
import Thumbnails from './Thumbnails';
import Image from './Image';
import Price from './Price';
import ColorSelector from './ColorSelector';
import Save from './Save';
import Heading from './Heading';
import SaleBadge from '../List/SaleBadge.js';

const product = {
  price: '170$',
  imgSrc: './images/shoe_detail.jpg',
  thumbnails: [
    './images/thumbnail_1.jpg',
    './images/big_shoe.jpg',
    './images/thumbnail_2.jpg',
    './images/thumbnail_3.jpg',
  ],
  name: 'ULTRA BOOST',
  colors: [
    {
      className: 'color-selector-button-silver',
      name: 'Silver',
    },
    {
      className: 'color-selector-button-havelock-blue',
      name: 'Havelock blue',
    },
    {
      className: 'color-selector-button-gainsboro',
      name: 'Gainsboro',
    },
    {
      className: 'color-selector-button-charcoal',
      name: 'Charcoal',
    },
  ],
  description: '<span class="manufacturer">Adidas<\/span> is a German multinational corporation, ' +
  'headquartered in Herzogenaurach, Germany, that designs and manufactures shoes, clothing and accessories.',
  sale: true,
};

export default () => (
  <section className="content">
    <div className="product">
      <Heading text={product.name} />
      <Save />
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
