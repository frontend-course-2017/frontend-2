import React from 'react';
import Button from './Button';
import { Gender } from './styled';

export default () => (
  <Gender>
    <Button text={'MAN'} genderFilter active name={'gender-man'} />
    <Button text={'WOMAN'} genderFilter active={false} name={'gender-woman'} />
  </Gender>
);
