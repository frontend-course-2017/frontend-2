import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import Card from './Card';

const renderRow = (items = []) => (
   items.map(item => (
     <Col xs={12} sm={6} md={4} lg={4}>
       <Card key={item.id} item={item} />
     </Col>
   ))
);

const Cards = ({ items }) => (
  <div className="shoes-list">
    <Row>
      {renderRow(items)}
    </Row>
  </div>
);

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;
