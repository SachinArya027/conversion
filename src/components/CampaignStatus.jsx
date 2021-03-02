import React from 'react';
import { ColorDot, StatusContainer } from '../styles';

const CampaignStatus = React.memo(function CampaignStatus({ isActive }) {
  return (
    <StatusContainer>
      <ColorDot color={isActive ? 'green' : 'red'} />
      {isActive ? 'Active' : 'Inactive'}
    </StatusContainer>
  );
});

export default CampaignStatus;
