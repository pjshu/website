import React from 'react';
import {Grid} from "@material-ui/core";


function About() {
  return (
    // grid layout
    <Grid
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
          About
        </div>
        <div style={{
          marginTop: 20,
          marginBottom: 20
        }}>
          100% Free, Community-driven and Remote
        </div>
        <div style={{
          lineHeight: '30px',
          fontSize: '20px'
        }}>
          <p style={{
            textIndent: '2em'
          }}>
            FlaskCon is a community driven Flask event intended for speakers and attendees all over the world to
            participate in technical and evangelical sessions related to Flask.
          </p>
        </div>
        <div style={{
          lineHeight: '30px',
          fontSize: '20px'
        }}>
          <p style={{
            textIndent: '2em'
          }}>
            Feel free to submit one using the button above! They
            will be reviewed by an awesome team composed of Pallets members, Flask maintainers and more.
          </p>
        </div>
      </Grid>
    </Grid>
  );
}

export default About;
