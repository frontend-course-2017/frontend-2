import React from 'react';
import Button from './Button';
import { Size, Label, Sizes } from './styled';

export default () => (
  <Size>
    <Label>SIZE</Label>
    <Sizes>
      <Button name={'size-36'} active={false}>36</Button>
      <Button name={'size-37'} active={false}>37</Button>
      <Button name={'size-38'} active={false}>38</Button>
      <Button name={'size-39'} active={false}>39</Button>
      <Button name={'size-40'} active={false}>40</Button>
      <Button name={'size-41'} active>41</Button>
      <Button name={'size-42'} active={false}>42</Button>
    </Sizes>
  </Size>
);

