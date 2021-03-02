import React from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  Box
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { TableHeadCell, StyledTableRow } from '../styles';
import CampaignStatus from './CampaignStatus';
import { campaignsSelector } from '../selectors';

function CampaignList() {
  const campaigns = useSelector(campaignsSelector);

  return (
    <Box marginTop={3}>
      {campaigns.length ? (
        <TableContainer component={Box} maxHeight="50vh" borderRadius={5}>
          <Table stickyHeader size="small">
            <TableHead>
              <StyledTableRow>
                <TableHeadCell>Name</TableHeadCell>
                <TableHeadCell>User Name</TableHeadCell>
                <TableHeadCell>Start Date</TableHeadCell>
                <TableHeadCell>End date</TableHeadCell>
                <TableHeadCell>Active</TableHeadCell>
                <TableHeadCell>Budget</TableHeadCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {campaigns.map(
                ({
                  uniqueId,
                  name,
                  userName,
                  startDate,
                  endDate,
                  isActive,
                  budget
                }) => (
                  <StyledTableRow
                    key={uniqueId}
                    data-testid="campaign-list-item"
                  >
                    <TableCell>{name}</TableCell>
                    <TableCell>{userName}</TableCell>
                    <TableCell>{startDate}</TableCell>
                    <TableCell>{endDate}</TableCell>
                    <TableCell>
                      <CampaignStatus isActive={isActive} />
                    </TableCell>
                    <TableCell>{budget}</TableCell>
                  </StyledTableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Alert severity="warning">
          <AlertTitle>No Data Found</AlertTitle>
          Add new campaigns or change search criteria.
        </Alert>
      )}
    </Box>
  );
}

export default CampaignList;
