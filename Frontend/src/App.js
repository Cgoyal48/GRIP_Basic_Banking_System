import React from 'react';
import { Tabs, Tab, Appbar, AppBar, CssBaseline} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Home from './Home.js';
import AllCustomers from './AllCustomers.js';
import {loadAllUsers} from "./helpers/helper"

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:'100vh',
    backgroundImage: `url(/banking-2.jpg)`,
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
  },
}));

export default function App(props){
  const { match, history } = props;
  const { params } = match;
  const { page } = params;
  const [users,setUsers]=React.useState([])
  const [selectedUser,setselectedUser]=React.useState();
  const preload =()=>{
    loadAllUsers().then((res)=>{
      console.log(res)
      setUsers(res.data)})
  }

  const getList =()=>{
    if(users.length>0 && Boolean(selectedUser)){
      console.log(users,selectedUser)
      return users.filter((user)=>user._id!=selectedUser._id)
    }
    return users
  }

React.useEffect(()=>{
  preload()
},[])

  const tabNameToIndex = {
    0: "home",
    1: "allcustomers",
  };

  const indexToTabName = {
    home: 0,
    allcustomers: 1,
  };

  const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };
  const classes=useStyles()


  return (
      <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={selectedTab} onChange={handleChange} >
                <Tab label="Home"/>
                <Tab label="All Customers" />
            </Tabs>
        </AppBar>
        {selectedTab==0 && <Home selectTab={setSelectedTab}/>}
        {selectedTab==1 && <AllCustomers user={selectedUser} filteredUsers={getList()} refetch={preload} selectUser={setselectedUser} selectTab={setSelectedTab} allUsers={users}/>}
      </div>
  )
}