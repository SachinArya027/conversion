import React from 'react';
import { Alert } from '@material-ui/lab';
import { useSelector, useDispatch } from 'react-redux';
import { resetError } from '../actions';
import { Box } from '@material-ui/core';

function AlertMessage() {
  const dispatch = useDispatch();
  const message = useSelector(({ error }) => error);

  return message ? (
    <Box marginBottom={2}>
      <Alert onClose={() => dispatch(resetError())} severity="error">
        {message}
      </Alert>
    </Box>
  ) : null;
}

export default AlertMessage;
