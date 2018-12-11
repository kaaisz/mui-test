import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import from MUI
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    appBar: {
      position: 'relative',
    },
    icon: {
      marginRight: theme.spacing.unit * 2, //margin-right:00
    },
    heroUnit: {
      backgroundColor: theme.palette.background.paper, //background-color:#000000;
    },
    heroContent:{
      maxWidth:600, //max-width:600;
      margin:`0 auto`, //margin:0 auto;
      padding:`${theme.spacing.unit * 8}px 0 ${theme.spacing.unit *6}px` //padding:00px 0 00px
    },
    heroButtons:{
      marginTop: theme.spacing.unit * 4,
    },
    layout:{
      width:'auto',
      marginLeft:theme.spacing.unit * 3,
      marginRight:theme.spacing.unit * 3,
      [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]:{
        width:1100,
        marginLeft:'auto',
        marginRight: 'auto',
      },
    },
    // cardGrid:{
    //   padding: `${theme.spacing.unit * 8}px 0`,
    // },
    // card:{
    //   height:'100%',
    //   display:'flex',
    //   flexDirection: 'column',
    // },
    // cardMedia:{
    //   paddingTop: '56.25%', //16:9
    // },
    // cardContent:{
    //   flexGrow:1,
    // },
    // footer:{
    //   backgroundColor: theme.palette.background.paper,
    //   padding: theme.spacing.unit * 6,
    // },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Album = (props) => {
  const { classes } = props;

  return(
    <React.Fragment>
      {/* Header */}
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" nowrap>Album Layout</Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Unit */}
      <div className={classes.heroUnit}>
        <div className={classes.heroContent}>
          {/* h1 - title */}
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Album Layout
          </Typography>
          {/* h6 - subtitle / textSecondary changes the color to gray / paragraph changes the margin*/}
          <Typography variant="h6" align="center" color="textSecondary" paragraph>
            Something short and leading about the collection below—its contents, the creator, etc.
            Make it short and sweet, but not too short so folks don&apos;t simply skip over it
            entirely.
          </Typography>
          <div className={classes.heroButtons}>
            {/* Grid container */}
            <Grid container spacing={16} justify="center">
              {/* inside contents of grid */}
              <Grid item>
                <Button variant="contained" color="primary">Main Call to Action</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">Secondary Action</Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);