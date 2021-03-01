import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { useStyles } from "./Table2.style";
//import dataLocal from "../../assets/data/data.json";
import Arrow from "../Arrow";

interface Column {
  id:
    | "index"
    | "id"
    | "firstName"
    | "lastName"
    | "email"
    | "phone"
    | "address"
    | "description";
  label: string;
  minWidth?: number;
}

const columns: Column[] = [
  { id: "index", label: "№", minWidth: 70 },
  { id: "id", label: "ID", minWidth: 70 },
  {
    id: "firstName",
    label: "firstName",
    minWidth: 150,
  },
  {
    id: "lastName",
    label: "lastName",
    minWidth: 150,
  },
  {
    id: "email",
    label: "email",
    minWidth: 220,
  },
  {
    id: "phone",
    label: "phone",
    minWidth: 250,
  },
  {
    id: "address",
    label: "city",
    minWidth: 170,
  },
  {
    id: "description",
    label: "description",
    minWidth: 170,
  },
];
interface DataProps {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    city: string;
  };
  description: string;
}

export default function Table2(props: {
  dataTable: DataProps[];
  sortData: (column: string) => void;
  direction: boolean;
}): JSX.Element {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { dataTable, sortData, direction } = props;
  const [field, setField] = useState("");

  const fieldSortData = (label: string) => {
    if (label !== "№" && label !== "description") {
      setField(label);
      sortData(label);
    }
    return;
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let value: number;
  direction ? (value = 180) : (value = 0);

  const rows = dataTable.map((item: DataProps, i: number) => {
    /* const rows = dataLocal.map((item: DataProps, i: number) => { */
    return {
      index: i + 1,
      id: item.id,
      firstName: item.firstName,
      lastName: item.lastName,
      email: item.email,
      phone: item.phone,
      address: item.address.city,
      description: item.description,
    };
  });

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  /* align={column.align} */
                  style={{
                    minWidth: column.minWidth,
                    /* border: "1px solid grey", */
                    padding: 10,
                  }}
                  onClick={() => fieldSortData(column.label)}
                >
                  {column.label}
                  {field === column.label &&
                  (column.label !== "№" || "description") ? (
                    <Arrow rotate={value} />
                  ) : null}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          key={column.id}
                          /* align={column.align} */
                          style={{ padding: 10 }}
                        >
                          {value}
                          {console.log(value)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
