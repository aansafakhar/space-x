import React from 'react';
import "./styles.css"
import { useQuery } from "@apollo/client";
import { Grid } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import GET_SHIPS from "../../queries/getShips"

const Ships =() => {
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
  const redirectToShip = (id) => {
    window.location.href = `/ship/?id=${id}`;
  }

  const options = {
    filterType: 'checkbox',
    onRowClick: (rowData) => redirectToShip(rowData[0]),
  };
  return (
    <Grid item container xs={12} className="misMain" justify="center" >
      <Grid item container xs={10} justify="center" className="tableGrid" alignItems="flex-start">
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

export default Ships;