import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Chip from '@material-ui/core/Chip';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import DateRangeIcon from '@material-ui/icons/DateRange';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import { transferMoney } from './helpers/helper.js';

const useStyles = makeStyles((theme) => ({
  parent:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'95vh',
    width:"100vh",
    minHeight:'100vh',
    backgroundImage: `url(/formim.jpg)`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '30ch',
    },
    textAlign:'center',
    marginTop:'10%',
    marginBottom:'10%',
  },
  cardroot: {
    Width: "100vh",
  },
  avatar: {
    backgroundColor: red[500],
  },
  chiproot: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function TransferMoney({filteredUsers,refetch, ...props}) {
  console.log(filteredUsers)
  const classes = useStyles();
  const [receiver, setReceiver] = React.useState();
  const [amount, setAmount] = React.useState(0);

  const handleReceiver = (event) => {
    setReceiver(event.target.value);
  };

  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  const isMoeneyGreaterThanReciver =()=>{
    if(amount>props.user.amount){
      return true
    }
    return false
  }

  const handleClick=() => {
    console.log(receiver)
    transferMoney(amount,receiver,props.user._id).then(()=>{refetch()})
     props.close(true)
  }
  return (
    <div className={classes.parent}>
      <Card className={classes.cardroot}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar}>
            {props.user.name[0]}
          </Avatar>
        }
        title={props.user.name}
        subheader={props.user.gender}
      />
      <CardContent>
      <div className={classes.chiproot}>
      <Chip
        icon={<AccountBalanceWalletIcon />}
        label={props.user.amount}
        color="primary"
      />
      <Chip
        icon={<ContactMailIcon />}
        label={props.user.email}
        color="primary"
      />
      <Chip
        icon={<ContactPhoneIcon />}
        label={props.user.phone}
        color="primary"
      />
      <Chip
        icon={<DateRangeIcon />}
        label={props.user.age}
        color="primary"
      />
      </div>
      </CardContent>
      <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="Select the Receiver"
          value={receiver}
          onChange={handleReceiver}
          color={'primary'}
          variant="outlined"
        >
          {filteredUsers.map((option) => (
            <MenuItem key={option._id} value={option._id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
            id="outlined-number"
            label="Amount to be send"
            type="number"
            value={amount}
            InputLabelProps={{
                shrink: true,
            }}

            color={'primary'}
            variant="outlined"
            onChange={handleChange}
            />
      </div>
      <div>
        <Button variant="contained" color="primary" disabled={!Boolean(receiver)|| !amount || amount<0 || isMoeneyGreaterThanReciver()} onClick={handleClick}>
                    Send
        </Button>
      </div>
    </form>
    </Card>
    </div>
  );
}
