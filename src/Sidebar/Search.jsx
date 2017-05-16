import React from 'react';
import {
  SearchContainer,
  SearchSubmitContainer,
  SearchForm,
  SearchSubmit,
  SearchInputContainer,
  SearchInput,
} from './styled';

export default () => (
  <SearchContainer>
    <SearchForm name="search" action="" method="get">
      <SearchSubmitContainer>
        <SearchSubmit type="submit" value="Search" />
      </SearchSubmitContainer>
      <SearchInputContainer>
        <SearchInput title="Search" type="text" />
      </SearchInputContainer>
    </SearchForm>
  </SearchContainer>
);
