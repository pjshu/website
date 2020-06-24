import React from 'react';
import {makeStyles} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import logo from '../images/FlaskCon_Logo.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // position: "relative",
    "& .MuiPaper-elevation4": {
      boxShadow: '0 0 0'
    }
  },
  colorPrimary: {
    background: '#fff',
  },
  menuButton: {
    position: "fixed",
    right: 0
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'), {noSsr: true});

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        classes={{
          colorPrimary: classes.colorPrimary,
        }}>
        <Toolbar>
          <div style={{
            width: 120,
            position: 'fixed',
            left: -15,
            top: -15
          }}>
            <img
              style={{
                maxWidth: '100%'
              }} src={logo} alt=""
            />
          </div>
          {
            matches && (
              <IconButton
                className={classes.menuButton}
                color="default"
                aria-label="menu"
              >
                <MenuIcon/>
              </IconButton>
            )
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}
