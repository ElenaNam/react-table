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
  [x: string]: number | string | Address | Address["city"];
  //index: string;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  /* city: Address["city"]; */
  description: string;
}

export default function TableApp(): JSX.Element {
  //const classes = useStyles();
  //const [data, setData] = useState<DataProps[]>(dataLocal);
  const [data, setData] = useState(dataLocal);
  const [direction, setDirection] = useState(true);

  const sortData = (column: string) => {
    //dataLocal.map((item, i) => (item["index"] = (i + 1).toString()));
    //if (column === "address") column = "address.city";
    const dataLocalCopy: DataProps[] = dataLocal.slice();
    let dataSort: DataProps[] = [];

    //dataLocalCopy.map((item, i) => (item["index"] = (i + 1).toString()));
    //if (column === "address") column = "address.city";

    if (direction) {
      dataSort = dataLocalCopy.sort((a, b) => (a[column] > b[column] ? 1 : -1));
      console.log("sort");
      console.log(dataLocalCopy[0].address.city);
      console.log(column);
    } else {
      dataSort = dataLocalCopy
        .sort((a, b) => (a[column] > b[column] ? 1 : -1))
        .reverse();

      console.log(column);
      console.log(dataLocalCopy[0].address.city);
    }
    setData(dataSort);
    setDirection(!direction);
  };

  return <Table1 dataTable={data} sortData={sortData} direction={direction} />;
}
