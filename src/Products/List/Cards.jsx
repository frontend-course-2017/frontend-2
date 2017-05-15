import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-flexbox-grid';
import Item from './Card';

const renderRowItems = (items = []) => (
   items.map(item => (
     <Col xs={12} sm={6} md={4} lg={3}>
       <Item key={item.id} item={item} />
     </Col>
   ))
);

function Cards({ items }) {
  const products = renderRowItems(items);
  return (
    <div className="shoes-list">
      <Row>
        {products}
      </Row>
    </div>
  );
}

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Cards;
