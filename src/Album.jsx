import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import from MUI
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';


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
    cardGrid:{
      padding: `${theme.spacing.unit * 8}px 0`,
    },
    card:{
      height:'100%',
      display:'flex',
      flexDirection: 'column',
    },
    cardMedia:{
      paddingTop: '56.25%', //16:9
    },
    cardContent:{
      flexGrow:1,
    },
    footer:{
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 6,
    },
});

// for cards UI
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

          {/* Hero Content */}
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
          {/* Grid container */}
          <Typography variant="h6" align="center" color="textSecondary">
            Grid card content will appear here
          </Typography>
          <Grid container spacing={40}>
            {/* mapping card array to store the data on each keys */}
            {cards.map(card=>(
              // define size to make this responsive
              <Grid item key={card} sm={6} md={4} lg={3}>
                <Card className={classes.card}>
                  <CardMedia 
                    className={classes.cardMedia}
                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

      {/* Footer - gutterBottomと記載すると、その下にコンテンツが近接している場合に勝手にマージンをつけてくれる*/}
      <footer className={classes.footer} gutterBottom>
        <Typography variant="h6" align="center">
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          something here to give the footer purpose :{`)`}
        </Typography>
      </footer>
    </React.Fragment>
  )
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Album);