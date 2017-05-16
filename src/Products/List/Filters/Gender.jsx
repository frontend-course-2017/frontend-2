import React from 'react';
import Button from './Button';

const Gender = () => (
  <div className="gender-filter">
    <Button text={'MAN'} active name={'gender-man'} />
    <Button text={'WOMAN'} active={false} name={'gender-woman'} />
  </div>
);

export default Gender;
