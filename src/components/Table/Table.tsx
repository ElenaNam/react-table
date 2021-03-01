import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, ColDef } from "@material-ui/data-grid/";
import { useStyles } from "./Table.style";
import dataLocal from "../../assets/data/data.json";

const columns: ColDef[] = [
  { field: "index", headerName: "№", width: 70 },
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "email",
    headerName: "Email",
    type: "string",
    width: 220,
  },
  {
    field: "phone",
    headerName: "Phone",
    type: "string",
    width: 250,
  },

  {
    field: "city",
    headerName: "City",
    type: "string",
    width: 200,
  },
];
interface Address {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}
interface DataProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  city?: Address["city"];
  description: string;
}

export default function Table(): JSX.Element {
  const classes = useStyles();
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}"
      );
      const res = result.data.map((item: DataProps, i: number) => {
        return {
          index: i + 1,
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
          phone: item.phone,
          city: item.address.city,
        };
      });
      setData(res);
    };
    fetchData().catch(() => {
      setData(dataLocal);
    });
  }, []);

  return (
    <div className={classes.content}>
      <p>the table was created using the Material-UI(DataGrid)</p>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[10, 25, 50]}
        //checkboxSelection
      />
    </div>
  );
}
