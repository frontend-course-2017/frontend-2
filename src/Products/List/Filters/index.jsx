import React from 'react';
import Icon from './Icon';
import Gender from './Gender';
import Size from './Size';

const genderItems = [
  {
    text: 'MAN',
    active: true,
    name: 'gender-man',
  },
  {
    text: 'WOMAN',
    active: false,
    name: 'gender-woman',
  },
];
const sizeItems = [
  {
    text: '36',
    active: false,
    name: 'size-36',
  },
  {
    text: '37',
    active: false,
    name: 'size-37',
  },
  {
    text: '38',
    active: false,
    name: 'size-38',
  },
  {
    text: '39',
    active: false,
    name: 'size-39',
  },
  {
    text: '40',
    active: false,
    name: 'size-40',
  },
  {
    text: '41',
    active: true,
    name: 'size-41',
  },
  {
    text: '42',
    active: false,
    name: 'size-42',
  },
];

export default () => (
  <div className="filter">
    <Icon />
    <form className="filter-form" name="filter" action="" method="get">
      <Gender items={genderItems} />
      <Size items={sizeItems} />
    </form>
  </div>
);
