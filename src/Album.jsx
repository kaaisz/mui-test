import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import from MUI
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { Toolbar } from '@material-ui/core';


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
    // heroContent:{
    //   maxWidth:600, //max-width:600;
    //   margin:`0 auto`, //margin:0 auto;
    //   padding:`${theme.spacing.unit * 8}px 0 ${theme.spacing.unit *6}px` //padding:00px 0 00px
    // },
    // heroButtons:{
    //   marginTop: theme.spacing.unit * 4,
    // },
    // layout:{
    //   width:'auto',
    //   marginLeft:theme.spacing.unit * 3,
    //   marginRight:theme.spacing.unit * 3,
    //   [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]:{
    //     width:1100,
    //     marginLeft:'auto',
    //     marginRight: 'auto',
    //   },
    // },
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
          {/* h1 */}
          <Typography component="h1" variant="h2" align="center" color="textPrimary">
            Album Layout
          </Typography>
        </div>
      </div>
    </React.Fragment>
  )
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);