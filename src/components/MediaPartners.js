import React from 'react';
import {Grid} from "@material-ui/core";
import flask from '../images/flask.png';
import python_discord from '../images/python_discord.jpg';

function MediaPartners() {
  return (
    <Grid style={{
      marginTop: '60px'
    }} container justify={"center"}>
      <Grid
        style={{
          marginTop: 40,
          maxWidth: 800
        }}
        container
        justify={"center"}
        direction={"column"}
      >
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
        >
          <div
            style={{
              fontSize: '40px',
              background: 'linear-gradient(to right, #F9C228, #EE762E)',
              '-webkit-background-clip': 'text',
              color: 'transparent',
            }}>
            Media Partners
          </div>
        </Grid>

        <Grid
          style={{
            marginTop: 40
          }}
          container justify={"space-between"} spacing={3}>
          <Grid
            style={{
              width: 200
            }}
            item>
            <img
              style={{
                maxWidth: '100%'
              }}
              src={flask} alt=""/>
          </Grid>
          <Grid
            style={{
              width: 200
            }}
            item
          >
            <img
              style={{
                maxWidth: '100%'
              }}
              src={python_discord} alt=""/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MediaPartners;
