import { useQuery } from "@apollo/client";
import React from 'react';
import "./styles.css"
import { Grid, Typography } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import GET_MISSION from "../../queries/getMission"

const Mission =() => {
  const missionId = new URL(window.location.href).searchParams.get("id")
  const { data } = useQuery(GET_MISSION, {
    variables: {
      id: missionId,
    },
  });

  return (
    <Grid item container xs={12} className="misMain" justify="center" >
      <Grid item xs={12}>
				<Typography variant="h3" className="heading">Company Data</Typography>
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
                    <TableCell className="tableCell">ID</TableCell>
                    <TableCell className="tableCell">{data.mission.id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="tableCell">Name</TableCell>
                    <TableCell className="tableCell">{data.mission.name}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="tableCell">Description</TableCell>
                    <TableCell className="tableCell">{data.mission.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="tableCell">Manufacturers</TableCell>
                    <TableCell className="tableCell">{data.mission.manufacturers}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="tableCell">Website</TableCell>
                    <TableCell className="tableCell">{data.mission.website}</TableCell>
                  </TableRow>
                  { data.mission.twitter && 
                  <TableRow>	
                    <TableCell className="tableCell">Twitter</TableCell>
                    <TableCell className="tableCell">{data.mission.twitter}</TableCell>
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

export default Mission;