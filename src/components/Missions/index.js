import React from 'react';
import "./styles.css"
import { Grid, Typography } from '@material-ui/core';
import MUIDataTable from "mui-datatables";
import { useQuery } from "@apollo/client";
import GET_MISSIONS from "../../queries/getMissions"
import { useHistory } from "react-router-dom";

const Missions =() => {
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
      sort: false,
     }
    },
    {
     name: "description",
     label: "Description",
     options: {
      filter: true,
      sort: false,
      customBodyRender: (value, tableMeta, updateValue) => {
        return <Typography variant="subtitle2" noWrap style={{maxWidth: "400px"}}>{value}</Typography>;
      },
     }
    },
    {
     name: "manufacturers",
     label: "Manufacturers",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
    name: "website",
    label: "Website",
      options: {
        filter: true,
        sort: false,
      }
    },
   ];
  const { data } = useQuery(GET_MISSIONS);
  const history = useHistory();
  const options = {
    filterType: 'checkbox',
    onRowClick: (rowData) => history.push(`/mission/?id=${rowData[0]}`),
  };
  return (
    <Grid item container xs={12} className="misMain" justify="center" >
      <Grid item container xs={10} justify="center" className="tableGrid" alignItems="flex-start">
      {data && (
        <MUIDataTable
        title={"Missions"}
        data={data.missions}
        columns={columns}
        options={options}
      />
      )}
      </Grid>
    </Grid>
  );
}

export default Missions;