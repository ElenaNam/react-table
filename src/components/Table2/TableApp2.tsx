import React, { useState } from "react";
import dataLocal from "../../assets/data/data.json";

//import { useStyles } from "./Table1.style";
import Table2 from "./Table2";

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
  //const [fieldName, setFieldName] = useState("");
  //const [countPage, setCountPage] = useState(0);

  const sortData = (column: string) => {
    const dataLocalCopy: DataProps[] = dataLocal.slice();
    let dataSort: DataProps[] = [];

    if (/* fieldName !== column &&  */ direction) {
      dataSort = dataLocalCopy.sort((a, b) => (a[column] > b[column] ? 1 : -1));
    } else if (/* fieldName === column &&  */ !direction) {
      dataSort = dataLocalCopy
        .sort((a, b) => (a[column] > b[column] ? 1 : -1))
        .reverse();
    }

    setData(dataSort);
    setDirection(!direction);
  };

  return <Table2 dataTable={data} sortData={sortData} direction={direction} />;
}
