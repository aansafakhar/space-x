import React from 'react';
import LandingPage from "../LandingPage";
import Missions from '../Missions';
import Mission from '../Mission';
import Ships from '../Ships';
import Ship from '../Ship';
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import logo from '../../images/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar =(props) => {
  const {
		classes,
	  } = props;
  return (
    <Router>
      <Grid style={{position: "relative" }} >
        <Grid style={{zIndex: 500, position: "sticky" }}>
          <AppBar color="transparent" >
            <Toolbar>
              <Grid item >
                <img src={logo} className={classes.img} alt="logo" />
              </Grid>
              <Link to='/' className={classes.navItems}>
                Home
              </Link>
              <Link to='/missions' className={classes.navItems}>
                Missions
              </Link>
              <Link to='/ships' className={classes.navItems}>
                Ships
              </Link>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid style={{ marginTop: "72px"}}>
        <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/missions' component={Missions} />
        <Route path='/mission' component={Mission} />
        <Route path='/ships' component={Ships} />
        <Route path='/ship' component={Ship} />
      </Switch>
        </Grid>
      
      </Grid>
    </Router>
  );
}

export default withStyles(styles)(NavBar);
