import { createSelector } from 'reselect';
import {
  formatBudget,
  formatDate,
  getActiveStatus,
  getCampaigns,
  getUserName
} from '../helpers';

export const campaignsSelector = createSelector(
  ({ filters }) => filters,
  ({ users }) => users,
  ({ campaigns }) => campaigns,
  (filters, users, campaigns) => {
    return getCampaigns(filters, campaigns).map((campaign) => ({
      ...campaign,
      userName: getUserName(campaign.userId, users),
      startDate: formatDate(campaign.startDate),
      endDate: formatDate(campaign.endDate),
      isActive: getActiveStatus(campaign),
      budget: formatBudget(campaign.budget)
    }));
  }
);
