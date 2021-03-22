import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Drawer from "@material-ui/core/Drawer";
import TransferMoney from './TransferMoney.js';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


export default function AllCustomers({allUsers:users, ...props}) {
  const classes = useStyles();
  const [state, setState] = React.useState({ right: false });
  const [alertOpen,setAlertOpen]=React.useState(false)
  const combinedFunction = (anchor, open,r) => (event) => {
      props.selectUser(r)
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
if(!users ){

  return <Typography>Something went wrong</Typography>
}
if(users && users.length<1){

  return <Typography>No Users in Database</Typography>
}

const handleDrawerClose =(transferred)=>{
if(transferred){
  setAlertOpen(true)
}
setState({right:false})
}

  return (
    <>
          <Snackbar open={alertOpen} autoHideDuration={6000} onClose={()=>setAlertOpen(false)}>
        <Alert onClose={()=>setAlertOpen(false)} severity="success">
        Money was trasnfered successfully!
        </Alert>
      </Snackbar>
    <Drawer width="100%"
      anchor={"right"}
      open={state["right"]}
      onClose={toggleDrawer("right", false)}
    >
      <TransferMoney 
      close={handleDrawerClose} 
      user={props.user}
       selectTab={props.selectTab}
        filteredUsers={props.filteredUsers} 
        refetch={props.refetch}/>
    </Drawer>
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Serial No.</StyledTableCell>
            <StyledTableCell>Customer's Name</StyledTableCell>
            <StyledTableCell align="right">Email Id</StyledTableCell>
            <StyledTableCell align="right">Conatct No.</StyledTableCell>
            <StyledTableCell align="right">Current Balance</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row,index) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{index+1}.</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                <Button variant="contained" color="primary" onClick={combinedFunction("right",true,row)}>
                    {row.name}
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.phone}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
