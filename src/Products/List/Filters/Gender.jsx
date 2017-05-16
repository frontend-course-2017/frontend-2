import React from 'react';
import Button from './Button';
import { Gender } from './styled';

export default () => (
  <Gender>
    <Button text={'MAN'} isGenderFilter active name={'gender-man'} />
    <Button text={'WOMAN'} isGenderFilter active={false} name={'gender-woman'} />
  </Gender>
);
