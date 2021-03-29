import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useQuery } from "@apollo/client";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import GET_COMPANYDATA from "../../queries/getCompanyData"
import "./styles.css"

const LandingPage =() => {
	const { data } = useQuery(GET_COMPANYDATA);

  return (
    <Grid item xs={12} container>
      {
        data &&
				<Grid item xs={12} container justify="center" alignItems="center" className={"mainGrid"}>
					<Grid item xs={11}>
						<Grid item xs={6}> 
							<Typography variant="h3" className={"title"}>
								{data.company.name}
							</Typography>
							<Typography variant="h6" className={"desc"}>
								{data.company.summary}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
      }
			{
				data &&			
				<Grid item xs={12} container justify="center" alignItems="center" className={"dataGrid"}>
					 <Grid item xs={11}>
							<Grid item xs={12}>
								<Typography variant="h3" className="heading">Company Data</Typography>
							</Grid>
							<Grid item container xs={12} justify="center">
								<Grid item xs={8}>
									<TableContainer>
										<Table>
											<TableBody>
												<TableRow>
													<TableCell className="tableCell">Chief Executive Officer</TableCell>
													<TableCell className="tableCell">{data.company.ceo}</TableCell>
												</TableRow>
												<TableRow>
													<TableCell className="tableCell">COO</TableCell>
													<TableCell className="tableCell">{data.company.coo}</TableCell>
												</TableRow>
												<TableRow>
													<TableCell className="tableCell">CTO</TableCell>
													<TableCell className="tableCell">{data.company.cto}</TableCell>
												</TableRow>
												<TableRow>
													<TableCell className="tableCell">Founder</TableCell>
													<TableCell className="tableCell">{data.company.founder}</TableCell>
												</TableRow>
												<TableRow>
													<TableCell className="tableCell">Founded</TableCell>
													<TableCell className="tableCell">{data.company.founded}</TableCell>
												</TableRow>
												<TableRow>	
													<TableCell className="tableCell">Headquarter's Address</TableCell>
													<TableCell className="tableCell">{data.company.headquarters.address} {data.company.headquarters.city}, {data.company.headquarters.state}</TableCell>
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

export default LandingPage;
