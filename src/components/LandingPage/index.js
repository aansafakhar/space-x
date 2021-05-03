import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useQuery } from "@apollo/client";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import GET_COMPANYDATA from "../../queries/getCompanyData"
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const LandingPage =(props) => {
	const { data } = useQuery(GET_COMPANYDATA);
	const {
		classes,
	  } = props
  return (
    <Grid item xs={12} container>
      {
        data &&
				<Grid item xs={12} container justify="center" alignItems="center" className={classes.mainGrid}>
					<Grid item xs={11}>
						<Grid item xs={6}> 
							<Typography variant="h3" className={classes.title}>
								{data.company.name}
							</Typography>
							<Typography variant="h6" className={classes.desc}>
								{data.company.summary}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
      }
			{
				data &&			
				<Grid item xs={12} container justify="center" alignItems="center" className={classes.dataGrid}>
					 <Grid item xs={11}>
							<Grid item xs={12}>
								<Typography variant="h3" className={classes.heading}>Company Data</Typography>
							</Grid>
							<Grid item container xs={12} justify="center">
								<Grid item xs={8}>
									<TableContainer>
										<Table>
											<TableBody>
												<TableRow>
													<TableCell className={classes.tableCell}>Chief Executive Officer</TableCell>
													<TableCell className={classes.tableCell}>{data.company.ceo}</TableCell>
												</TableRow>
												<TableRow>
													<TableCell className={classes.tableCell}>COO</TableCell>
													<TableCell className={classes.tableCell}>{data.company.coo}</TableCell>
												</TableRow>
												<TableRow>
													<TableCell className={classes.tableCell}>CTO</TableCell>
													<TableCell className={classes.tableCell}>{data.company.cto}</TableCell>
												</TableRow>
												<TableRow>
													<TableCell className={classes.tableCell}>Founder</TableCell>
													<TableCell className={classes.tableCell}>{data.company.founder}</TableCell>
												</TableRow>
												<TableRow>
													<TableCell className={classes.tableCell}>Founded</TableCell>
													<TableCell className={classes.tableCell}>{data.company.founded}</TableCell>
												</TableRow>
												<TableRow>	
													<TableCell className={classes.tableCell}>Headquarter's Address</TableCell>
													<TableCell className={classes.tableCell}>{data.company.headquarters.address} {data.company.headquarters.city}, {data.company.headquarters.state}</TableCell>
												</TableRow>
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							</Grid>
					 </Grid>
				</Grid>
			}
    </Grid>
  );
}

export default withStyles(styles)(LandingPage);
