import React from 'react';
import { Grid, Box } from '@material-ui/core';
import DateFilter from './filters/DateFilter';
import NameFilter from './filters/NameFilter';

function CampaignFilter() {
  return (
    <Grid container justify="space-between">
      <Grid item xs={12} md={6}>
        <DateFilter />
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container justify="space-between">
          <Box component={Grid} item display={{ xs: 'none', md: 'block' }} />
          <Grid item xs={10} md={6}>
            <NameFilter />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CampaignFilter;
