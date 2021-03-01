import React, { useEffect, useState } from "react";
import Arrow from "../Arrow";
//import Paginator from "../Paginator";
import { useStyles } from "./Table1.style";

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

export default function Table(props: {
  dataTable: DataProps[];
  sortData: (column: string) => void;
  direction: boolean;
}): JSX.Element {
  const classes = useStyles();
  const { dataTable, sortData, direction } = props;
  const [field, setField] = useState("");

  const fieldSortData = (column: string) => {
    setField(column);
    sortData(column);
  };
  useEffect(() => {
    //fieldSortData(field);
    //console.log(field);
  });

  let value: number;
  direction ? (value = 180) : (value = 0);

  return (
    <table className={classes.content}>
      <caption className={classes.caption}>the table</caption>
      <tr>
        <th className={classes.th}>№</th>
        <th className={classes.th} onClick={() => fieldSortData("id")}>
          id {field === "id" ? <Arrow rotate={value} /> : null}
        </th>
        <th className={classes.th} onClick={() => fieldSortData("firstName")}>
          firstName {field === "firstName" ? <Arrow rotate={value} /> : null}
        </th>
        <th className={classes.th} onClick={() => fieldSortData("lastName")}>
          lastName {field === "lastName" ? <Arrow rotate={value} /> : null}
        </th>
        <th className={classes.th} onClick={() => fieldSortData("email")}>
          email {field === "email" ? <Arrow rotate={value} /> : null}
        </th>
        <th className={classes.th} onClick={() => fieldSortData("phone")}>
          phone {field === "phone" ? <Arrow rotate={value} /> : null}
        </th>
        <th className={classes.th} onClick={() => fieldSortData("city")}>
          city {field === "city" ? <Arrow rotate={value} /> : null}
        </th>
        <th
          className={classes.th} /*  onClick={() => sortData("description")} */
        >
          description
        </th>
      </tr>
      {dataTable.map((item: DataProps, i: number) => {
        return (
          <tr
            key={item.id}
            className={classes.tr}
            style={
              i % 2 !== 0
                ? { backgroundColor: "#F1ECFF" }
                : { backgroundColor: "#B1ACBF" }
            }
          >
            <td className={classes.td}>{i + 1}</td>
            <td className={classes.td}>{item.id}</td>
            <td className={classes.td}>{item.firstName}</td>
            <td className={classes.td}>{item.lastName}</td>
            <td className={classes.td}>{item.email}</td>
            <td className={classes.td} style={{ whiteSpace: "nowrap" }}>
              {item.phone}
            </td>
            <td className={classes.td}>{item.address.city}</td>
            <td className={classes.td}>{item.description}</td>
          </tr>
        );
      })}
    </table>
  );
}
