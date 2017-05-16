import React from 'react';
import {
  Container,
  SubmitContainer,
  Form,
  Submit,
  InputContainer,
  Input,
} from './styled';

export default () => (
  <Container>
    <Form name="search" action="" method="get">
      <SubmitContainer>
        <Submit type="submit" value="Search" />
      </SubmitContainer>
      <InputContainer>
        <Input title="Search" type="text" />
      </InputContainer>
    </Form>
  </Container>
);
