import React from 'react';
import { useQuery } from "@apollo/client";
import { Grid, Typography } from '@material-ui/core';
import GET_SHIP from "../../queries/getShip"
import MUIDataTable from "mui-datatables";
import styles from './styles';
import { withStyles } from '@material-ui/core/styles'

const Ship =(props) => {
  const {
		classes,
	  } = props;
  const columns = [
    {
     name: "flight",
     label: "Flight",
    },
    {
      name: "name",
      label: "Name",
     },
  ];
  const shipId = new URL(window.location.href).searchParams.get("id")
  const { data } = useQuery(GET_SHIP, {
    variables: {
      id: shipId,
    },
  });
  return (
    <Grid item container xs={12} className={classes.misMain} justify="center" >
      <Grid item xs={12}>
			{
        data &&
        <Typography variant="h3" className={classes.heading}>{data.ship.name}</Typography>
      }
			</Grid>
      <Grid item container xs={12} justify="center">
        <Grid item xs={8}>
        {
          data && (
          <MUIDataTable
          title={"Missions"}
          data={data.ship.missions}
          columns={columns}
          />
        )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Ship);