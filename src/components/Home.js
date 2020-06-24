import React from 'react';
import {Grid, Box} from "@material-ui/core";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomIcon from '@material-ui/icons/Room';

function Timing({date1, date2, name}) {
  return (
    <Grid item>
      <Grid item container>
        <Box
          boxShadow={2}
          style={{
            marginLeft: 20,
            marginRight: 5,
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            borderRadius: 10,
            height: 100,
            width: 100,
            fontWeight: "bold",
            fontSize: 35
          }}>
          {date1}
        </Box>
        <Box
          boxShadow={3}
          style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            borderRadius: 10,
            height: 100,
            width: 100,
            fontWeight: "bold",
            fontSize: 35
          }}>
          {date2}
        </Box>
      </Grid>
      <Grid style={{
        marginLeft: 20
      }}>
        <Box
          item
          component={Grid}
          boxShadow={2}
          style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: "center",
            borderRadius: 10,
            height: 50,
            width: 205,
            fontWeight: "bold",
          }}>
          {name}
        </Box>
      </Grid>
    </Grid>
  );
}

function Home() {

  return (
    <Grid
      container
      justify={"center"}
      alignItems={"center"}
      direction={"column"}
      // spacing={4}
      style={{
        height: '100vh'
      }}>
      <Grid item>
        <h1 style={{
          transform: 'rotate(-5deg)'
        }}>
          <span
            style={{
              fontSize: '80px'
            }}>
            FlaskCon
          </span>
          <br/>
          <span style={{
            marginLeft: '250px',
            background: 'linear-gradient(to right, #F9C228, #EE762E)',
            '-webkit-background-clip': 'text',
            color: 'transparent',
          }}>
            2020
          </span>
        </h1>
      </Grid>

      <Grid item style={{
        marginTop: 20
      }}>
        <u>
          Event starts in
        </u>
      </Grid>

      <Grid
        style={{
          marginTop: 20
        }}
        item
        justify={"center"}
        container
        direction={"row"}
        spacing={5}>
        <Grid
          container
          direction={"row"}
          alignItems={"center"}
          justify={"center"}
        >
          <Timing
            {...{date1: 1, date2: 0, name: 'days'}}
          />
          <Timing
            {...{date1: 10, date2: 9, name: 'hours'}}
          />
          <Timing
            {...{date1: 2, date2: 27, name: 'minutes'}}
          />

          <Timing
            {...{date1: 4, date2: 45, name: 'seconds'}}
          />
        </Grid>

      </Grid>

      <Grid
        style={{
          marginTop: 40
        }}
        item
      >
        July 4th & 5th
      </Grid>

      <Grid
        item
        style={{
          display: "flex",
          alignItems: "center"
        }}>
        <AccessTimeIcon/>
        <span style={{
          marginTop: 10,
          marginLeft: 10
        }}>
          9:00 - 14:00 GMT
        </span>
      </Grid>

      <Grid
        item
        style={{
          display: "flex",
          alignItems: "center"
        }}>
        <RoomIcon/>
        <span style={{
          marginTop: 10,
          marginLeft: 10
        }}>
          Remote
        </span>
      </Grid>
    </Grid>
  );
}

export default Home;
