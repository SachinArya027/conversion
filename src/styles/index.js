import {
  styled,
  Box,
  TableCell,
  TableRow,
  withStyles,
  Paper
} from '@material-ui/core';

export const AppContainer = styled(Paper)({
  minHeight: '80vh',
  paddingBottom: '32px'
});

export const HeaderContainer = styled(Box)({
  padding: '8px',
  backgroundColor: '#DCDCDC',
  boxShadow: '0 2px 1px 1px #A9A9A9',
  marginBottom: '32px',
  borderRadius: '5px'
});

export const TableHeadCell = styled(TableCell)({
  backgroundColor: '#808080',
  color: '#FFFFFF',
  fontWeight: 500
});

export const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    }
  }
}))(TableRow);

export const ColorDot = styled(Box)(({ color }) => ({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: color,
  marginRight: '8px'
}));

export const StatusContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center'
});
