import { useQuery } from "@apollo/client";
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import GET_MISSION from "../../queries/getMission"
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const Mission =(props) => {
  const missionId = new URL(window.location.href).searchParams.get("id")
  const { data } = useQuery(GET_MISSION, {
    variables: {
      id: missionId,
    },
  });
  const {
		classes,
	} = props;
  return (
    <Grid item container xs={12} className={classes.misMain} justify="center" >
      <Grid item xs={12}>
				<Typography variant="h3" className={classes.heading}>Company Data</Typography>
			</Grid>
      <Grid item container xs={12} justify="center">
        <Grid item xs={8}>
          <TableContainer>
            <Table>
              {
                data
                &&
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.tableCell}>ID</TableCell>
                    <TableCell className={classes.tableCell}>{data.mission.id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell}>Name</TableCell>
                    <TableCell className={classes.tableCell}>{data.mission.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell}>Description</TableCell>
                    <TableCell className={classes.tableCell}>{data.mission.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell}>Manufacturers</TableCell>
                    <TableCell className={classes.tableCell}>{data.mission.manufacturers}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.tableCell}>Website</TableCell>
                    <TableCell className={classes.tableCell}>{data.mission.website}</TableCell>
                  </TableRow>
                  { data.mission.twitter && 
                  <TableRow>	
                    <TableCell className={classes.tableCell}>Twitter</TableCell>
                    <TableCell className={classes.tableCell}>{data.mission.twitter}</TableCell>
                  </TableRow>}
              </TableBody>
              }
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Mission);