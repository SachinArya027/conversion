import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from '@material-ui/core';

import CampaignFilter from './CampaignFilter';
import CampaignList from './CampaignList';
import AlertMessage from './AlertMessage';
import { fetchUsers, bulkAddCampaigns } from '../actions';
import AppHeader from './AppHeader';
import { AppContainer } from '../styles';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // binding bulkAddCampaigns on window obj
    // to make it available in browser console
    window.AddCampaigns = bindActionCreators(bulkAddCampaigns, dispatch);

    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <AppContainer data-testid="app">
      <AppHeader />
      <Container>
        <AlertMessage />
        <CampaignFilter />
        <CampaignList />
      </Container>
    </AppContainer>
  );
}

export default App;
