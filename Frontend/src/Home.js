import React, { useEffect, useState } from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import {Collapse} from '@material-ui/core';

const useStyles=makeStyles({
  root:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'90vh',
      fontSize:'2rem',
      fontFamily:'Nunito',
      textAlign:'center',
  },
  head:{
      color:'black',
  },
  t:{
    color:'red',
  },
  s:{
    color:'blue',
  },
  f:{
    color:'green',
  },
})
export default function Home(props) {
  const classes=useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.root}>
          <h1 className={classes.head}>Welcome To<br></br><span className={classes.t}>T</span><span className={classes.s}>S</span><span className={classes.f}>F</span> Bank.</h1>
        </div>
      </Collapse>
    
  );
}
