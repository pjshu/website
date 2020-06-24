import React from 'react';
import {Grid} from "@material-ui/core";


function CodeOfConduct() {
  return (
    <Grid
      container
      justify={"center"}
      style={{
        marginTop: '60px'
      }}
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
          Code of conduct
        </div>
        <div style={{
          lineHeight: '30px',
          fontSize: '20px'
        }}>
          <p style={{
            textIndent: '2em'
          }}>
            FlaskCon is a diverse community who maintains a reputation as a friendly, welcoming, inspiring and dynamic
            group.
            We’d like to keep it that way, which is why we ask all participants, speakers, organizers and sponsors
            (collectively: the attendees) to follow the same code of conduct (CoC) as upheld by EuroPython 2020.
          </p>
        </div>
        <div style={{
          lineHeight: '30px',
          fontSize: '20px'
        }}>
          <p style={{
            textIndent: '2em'
          }}>
            We’d like to keep it that way, which is why we ask all participants,
            speakers, organizers and sponsors (collectively: the attendees) to follow the same code of conduct (CoC) as
            upheld by EuroPython 2020.

          </p>
        </div>
      </Grid>
    </Grid>
  );
}

export default CodeOfConduct;
