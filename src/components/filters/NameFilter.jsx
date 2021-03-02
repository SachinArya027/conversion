import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { setName } from '../../actions';

function NameFilter() {
  const dispatch = useDispatch();
  const { name } = useSelector(({ filters }) => filters);

  return (
    <TextField
      data-testid="name-field"
      fullWidth
      name="name"
      label="Search by name"
      value={name}
      onChange={(e) => dispatch(setName(e.target.value))}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <SearchIcon />
          </InputAdornment>
        )
      }}
    />
  );
}

export default NameFilter;
