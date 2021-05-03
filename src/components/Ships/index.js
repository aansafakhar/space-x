import React from 'react';
import { useQuery } from "@apollo/client";
import { Grid } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import GET_SHIPS from "../../queries/getShips"
import { useHistory } from "react-router-dom";
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'

const Ships =(props) => {
  const {
		classes,
	} = props;
  const columns = [
    {
     name: "id",
     label: "ID",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
      name: "name",
      label: "Name",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "roles",
      label: "Roles",
      options: {
       filter: true,
       sort: true,
      }
     },
     {
      name: "image",
      label: "Image",
      options: {
       filter: true,
       sort: true,
      }
     },
   ];
  const { data } = useQuery(GET_SHIPS);
  const history = useHistory();
  
  const options = {
    filterType: 'checkbox',
    onRowClick: (rowData) => history.push(`/ship/?id=${rowData[0]}`),
  };
  return (
    <Grid item container xs={12} className={classes.misMain} justify="center" >
      <Grid item container xs={10} justify="center" className={classes.tableGrid} alignItems="flex-start">
      {data && (
        <MUIDataTable
        title={"Ships"}
        data={data.ships}
        columns={columns}
        options={options}
      />
      )}
      </Grid>
    </Grid>
  );
}

export default withStyles(styles)(Ships);