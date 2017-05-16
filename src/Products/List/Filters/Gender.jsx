import React from 'react';
import Button from './Button';
import { Gender } from './styled';

export default () => (
  <Gender>
    <Button isGenderFilter active name={'gender-man'}>MAN</Button>
    <Button isGenderFilter active={false} name={'gender-woman'}>WOMAN</Button>
  </Gender>
);
