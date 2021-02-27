import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  DataGrid,
  ColDef,
  ValueGetterParams,
  columnsTotalWidthSelector,
} from "@material-ui/data-grid/";
import { useStyles } from "./Table.style";

const columns: ColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "email",
    headerName: "email",
    type: "string",
    width: 90,
  },
  {
    field: "phone",
    headerName: "phone",
    type: "string",
    width: 100,
  },

  {
    field: "city",
    headerName: "city",
    type: "string",
    width: 120,
  },
  /*   {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: ValueGetterParams) =>
      `${params.getValue("firstName") || ""} ${
        params.getValue("lastName") || ""
      }`,
  }, */
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
      const res = result.data.map((item: DataProps) => {
        return {
          id: item.id,
          firstName: item.firstName,
          lastName: item.lastName,
          email: item.email,
          phone: item.phone,
          city: item.address.city,
        };
      });
      setData(res);
      /*       console.log("data copy");
      console.log(result);
      console.log(result.data);
      console.log(data); */
    };
    fetchData();
  }, []);

  return (
    <div className={classes.content}>
      <DataGrid rows={data} columns={columns} pageSize={25} checkboxSelection />
    </div>
  );
}
