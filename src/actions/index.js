import {
  BULK_ADD_CAMPAIGNS,
  SET_ERROR,
  RESET_ERROR,
  SET_NAME,
  SET_DATE_RANGE
} from './types';

export const resetError = () => ({ type: RESET_ERROR });

export const setError = (message) => ({ type: SET_ERROR, payload: message });

export const bulkAddCampaigns = (campaigns) => ({
  type: BULK_ADD_CAMPAIGNS,
  payload: campaigns
});

export const setName = (name) => ({
  type: SET_NAME,
  payload: name
});

export const setDateRange = (start, end) => ({
  type: SET_DATE_RANGE,
  payload: { start, end }
});

export * from './thunk';
