import React, { useState, useEffect } from "react";
import dataLocal from "../../assets/data/data.json";

//import { useStyles } from "./Table1.style";
import Table1 from "./Table1";

interface Address {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}
interface DataProps {
  [x: string]: any;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  city?: Address["city"];
  description: string;
}

export default function TableApp(): JSX.Element {
  //const classes = useStyles();
  const [data, setData] = useState(dataLocal);
  const [direction, setDirection] = useState(true);

  const sortData = (column: string) => {
    const dataLocalCopy: DataProps[] = dataLocal.slice();
    let dataSort: DataProps[] = [];

    if (direction) {
      dataSort = dataLocalCopy.sort((a, b) => (a[column] > b[column] ? 1 : -1));
      console.log("sort");
      console.log(dataLocalCopy);
    } else {
      dataSort = dataLocalCopy
        .sort((a, b) => (a[column] > b[column] ? 1 : -1))
        .reverse();
    }
    setData(dataSort);
    setDirection(!direction);
  };

  return <Table1 dataTable={data} sortData={sortData} />;
}
