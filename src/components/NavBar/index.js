import React from 'react';
import LandingPage from "../LandingPage";
import Missions from '../Missions';
import Mission from '../Mission';
import Ships from '../Ships';
import Ship from '../Ship';
import "./styles.css";
import { AppBar, Toolbar, Grid } from "@material-ui/core";
import logo from '../../images/logo.png';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar =() => {
  return (
    <Router>
      <Grid style={{position: "relative"}}>
        <Grid style={{zIndex: 500, position: "sticky" }}>
          <AppBar color="transparent">
            <Toolbar>
              <Grid item >
                <img src={logo} className="img" alt="logo" />
              </Grid>
              <Link to='/' className="navItems">
                Home
              </Link>
              <Link to='/missions' className="navItems">
                Missions
              </Link>
              <Link to='/ships' className="navItems">
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

export default NavBar;
