import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { ShoesList, ShoeRow, ShoeCol } from './styled';

const renderRow = (items = []) => (
   items.map(item => (
     <ShoeCol xs={12} sm={6} md={4} lg={4}>
       <Card key={item.id} item={item} />
     </ShoeCol>
   ))
);

const Cards = ({ items }) => (
  <ShoesList>
    <ShoeRow>
      {renderRow(items)}
    </ShoeRow>
  </ShoesList>
);

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;
