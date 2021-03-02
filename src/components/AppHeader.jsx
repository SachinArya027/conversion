import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { HeaderContainer } from '../styles';

const AppHeader = () => (
  <HeaderContainer>
    <Container>
      <Typography variant="h5" component="h1">
        Search Campaigns...
      </Typography>
    </Container>
  </HeaderContainer>
);

export default AppHeader;
