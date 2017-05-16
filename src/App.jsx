import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import 'normalize.css';

import Sidebar from './Sidebar';
import ProductsList from './Products/List';
import ProductDetail from './Products/Detail';
import { Wrapper, ContentTwoColumn, Content } from './styled';
import './fonts.css';

const App = () => (
  <Router>
    <Wrapper>
      <ContentTwoColumn>
        <Sidebar />
        <Content>
          <Route exact path="/" component={ProductsList} />
          <Route exact path="/sports/" component={ProductsList} />
          <Route exact path="/sports/shoes/" component={ProductsList} />
          <Route exact path="/sports/shoes/shoe-1/" component={ProductDetail} />
        </Content>
      </ContentTwoColumn>
    </Wrapper>
  </Router>
);

export default App;
