import React from 'react';
import Button from './Button';
import { Size, Label, Sizes } from './styled';

export default () => (
  <Size>
    <Label>SIZE</Label>
    <Sizes>
      <Button name={'size-36'} active={false} text={'36'} />
      <Button name={'size-37'} active={false} text={'37'} />
      <Button name={'size-38'} active={false} text={'38'} />
      <Button name={'size-39'} active={false} text={'39'} />
      <Button name={'size-40'} active={false} text={'40'} />
      <Button name={'size-41'} active text={'41'} />
      <Button name={'size-42'} active={false} text={'42'} />
    </Sizes>
  </Size>
);

