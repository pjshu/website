import React from 'react';
import {makeStyles, Avatar, Grid} from "@material-ui/core";

const useStyles = makeStyles({
  avatar: {
    height: 150,
    width: 150
  }
});


function AvatarComponents({src, name, org}) {
  const classes = useStyles();
  return (
    <Grid
      item
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Avatar
        className={classes.avatar}
        src={src}/>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: 150
        }}>
        {name}
      </div>
      <div style={{
        display: "flex",
        justifyContent: "center",
        maxWidth: 150
      }}>
        ({org})
      </div>
    </Grid>
  );
}

function Reviewers() {
  return (
    <Grid
      style={{
        marginTop: 40
      }}
      container justify={"center"} direction={"column"}>
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
          Reviewers(Pallets)
        </div>
      </Grid>

      <Grid
        container
        direction={"column"}
        alignItems={"center"}
      >
        <Grid
          container
          justify={"center"}
          direction={"row"}
          spacing={10}
          style={{
            marginTop: 40,
            marginBottom: 40
          }}
        >
          <AvatarComponents
            name={"David"}
            src={"https://avatars3.githubusercontent.com/u/1242887?s=400&v=4"}
            org={"Pallets"}
          />
          <AvatarComponents
            name={"Adam Englander"}
            org={"Werkzeug Maintainer"}
          />
          <AvatarComponents
            name={"Grey Li"}
            org={"Flask Maintainer"}
          />
          <AvatarComponents
            name={"Julien Demoor"}
            org={"PyMUG"}
          />
        </Grid>


        <Grid
          container
          justify={"center"}
          direction={"row"}
          spacing={10}
        >
          <AvatarComponents
            name={"Miguel Grinberg"}
            org={"Flask Maintainer, PythonIreland"}
          />
          <AvatarComponents
            name={"Ali-Akber Saifee"}
            org={"Flask-limiter"}
          />
          <AvatarComponents
            name={"Steven Loria"}
            org={"Marshmallow & Flask-marshmallow"}
          />
          <AvatarComponents
            name={"Namgyal Brisson"}
            org={"PyMUG"}
          />
        </Grid>
      </Grid>

    </Grid>
  );
}

export default Reviewers;
