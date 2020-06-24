import React from 'react';
import bangpypers from '../images/bangpypers.png';
import GilPUG from '../images/GilPUG.jpg';
import pyie from '../images/pyie.png';
import pymug_new from '../images/pymug_new.svg';
import python_amsterdam from '../images/python_amsterdam.svg';
import pynigeria from '../images/pynigeria.svg';
import python_china from '../images/python_china.jpg';
import python_moscow from '../images/python_moscow.png';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

// css in js
const useStyles = makeStyles({
  image: {
    width: 150,
    height: 150,
    marginRight: 80,
    borderRadius: 75,
  }
});


function Organisers() {
  const classes = useStyles();
  return (
    <Grid container justify={"center"}>
      <Grid
        style={{
          fontSize: '40px',
          background: 'linear-gradient(to right, #F9C228, #EE762E)',
          '-webkit-background-clip': 'text',
          color: 'transparent',
        }}>
        Organisers
      </Grid>
      <Grid container spacing={3}>
        <Grid container item justify={"center"} style={{
          marginTop: 40
        }}>
          {
            [bangpypers, GilPUG, pyie, pymug_new].map(image => (
              <Grid
                container
                component={'img'}
                src={image}
                justify={"center"}
                alignItems={"center"}
                className={classes.image}
              />
            ))
          }
        </Grid>

        <Grid container item justify={"center"} style={{
          marginTop: 40
        }}>
          {
            [python_amsterdam, pynigeria, python_china, python_moscow].map(image => (
              <Grid
                container
                component={'img'}
                src={image}
                justify={"center"}
                alignItems={"center"}
                className={classes.image}
              />
            ))
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Organisers;
