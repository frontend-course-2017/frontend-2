import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ColorButton } from './styled';

const renderItems = (colors = []) => (
  colors.map(color => (
    <ColorButton key={color.id} color={color.code} >
      {color.name}
    </ColorButton>
  ))
);

const ColorSelector = ({ colors }) => (
  <Panel>
    <form name="color-selector-form" method="get" action="">
      { renderItems(colors)}
    </form>
  </Panel>
);

ColorSelector.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ColorSelector;
