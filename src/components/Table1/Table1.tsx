import React from "react";
import Arrow from "../Arrow";
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

  let value: number;
  direction ? (value = 180) : (value = 0);

  return (
    <table className={classes.content}>
      <caption className={classes.caption}>the table</caption>
      <tr>
        <th className={classes.th} /*  onClick={() => sortData("index")} */>
          № {/* <Arrow rotate={value}  /> */}
        </th>
        <th className={classes.th} onClick={() => sortData("id")}>
          id <Arrow rotate={value} />
        </th>
        <th className={classes.th} onClick={() => sortData("firstName")}>
          firstName <Arrow rotate={value} />
        </th>
        <th className={classes.th} onClick={() => sortData("lastName")}>
          lastName <Arrow rotate={value} />
        </th>
        <th className={classes.th} onClick={() => sortData("email")}>
          email <Arrow rotate={value} />
        </th>
        <th className={classes.th} onClick={() => sortData("phone")}>
          phone <Arrow rotate={value} />
        </th>
        <th className={classes.th} onClick={() => sortData("address")}>
          city <Arrow rotate={value} />
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
