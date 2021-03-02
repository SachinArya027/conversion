import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, TextField, IconButton } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/RemoveCircleOutline';
import { setDateRange } from '../../actions';

function DateFilter() {
  const { start, end } = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const startDate = e.target.name === 'start' ? e.target.value : start;
    const endDate = e.target.name === 'end' ? e.target.value : end;
    dispatch(setDateRange(startDate, endDate));
  };

  return (
    <Grid container spacing={3} justify="space-between" alignItems="center">
      <Grid item xs={5}>
        <TextField
          data-testid="start-field"
          fullWidth
          name="start"
          label="Start Date"
          type="date"
          value={start}
          onChange={handleChange}
          inputProps={{ max: end }}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>
      <Grid item xs={5}>
        <TextField
          data-testid="end-field"
          fullWidth
          name="end"
          label="End Date"
          type="date"
          value={end}
          onChange={handleChange}
          inputProps={{ min: start }}
          InputLabelProps={{
            shrink: true
          }}
        />
      </Grid>
      <Grid item xs={2}>
        <IconButton
          disabled={!start && !end}
          onClick={() => dispatch(setDateRange('', ''))}
        >
          <RemoveIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
}

export default DateFilter;
