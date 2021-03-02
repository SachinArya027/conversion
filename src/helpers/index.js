import moment from 'moment';

function checkInRange(startRange, endRange, startDate, endDate) {
  startDate = moment(startDate, 'MM/DD/YYYY');
  endDate = moment(endDate, 'MM/DD/YYYY');

  // return false for invalid dates (i.e. start > end)
  if (startDate.isAfter(endDate)) return false;

  startRange = startRange ? moment(startRange) : startDate;
  endRange = endRange ? moment(endRange) : endDate;

  return (
    startDate.isBetween(startRange, endRange, undefined, '[]') &&
    endDate.isBetween(startRange, endRange, undefined, '[]')
  );
}

export function getUserName(userId, users) {
  return users.find(({ id }) => id === userId)?.name || 'Unknown User';
}

export function getActiveStatus({ startDate, endDate }) {
  const today = moment();
  const start = moment(startDate, 'MM/DD/YYYY');
  const end = moment(endDate, 'MM/DD/YYYY');

  return today.isBetween(start, end);
}

export function formatDate(dateString) {
  return moment(dateString, 'MM/DD/YYYY').format('DD/MM/YYYY');
}

export function formatBudget(number) {
  if (number > 10 ** 6) {
    return `${(number / 10 ** 6).toFixed(1)}M USD`;
  } else if (number > 10 ** 3) {
    return `${(number / 10 ** 3).toFixed(1)}K USD`;
  } else {
    return `${number} USD`;
  }
}

export function getCampaigns(filters, campaigns) {
  const { start, end, name } = filters;

  return campaigns.filter((campaign) => {
    const matchName = name
      ? campaign.name.toLowerCase().startsWith(name.toLowerCase())
      : true;

    const inRange = checkInRange(
      start,
      end,
      campaign.startDate,
      campaign.endDate
    );

    return matchName && inRange;
  });
}
