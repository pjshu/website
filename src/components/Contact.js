import React, {useState} from 'react';
import {Grid, Box} from "@material-ui/core";


function About() {
  return (
    <Grid
      style={{
        marginTop: '60px'
      }}
      container
      justify={"center"}
    >
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        style={{
          borderRadius: '20px',
          margin: 20,
          padding: 20,
          maxWidth: 1000
        }}
      >
        <div style={{
          fontSize: '40px',
          background: 'linear-gradient(to right, #F9C228, #EE762E)',
          '-webkit-background-clip': 'text',
          color: 'transparent',
        }}>
          Contact
        </div>
        <div style={{
          marginTop: 20,
          marginBottom: 20
        }}>
          flaskcon [-AT-] gmail.com
        </div>
      </Grid>
    </Grid>
  );
}

export default About;
