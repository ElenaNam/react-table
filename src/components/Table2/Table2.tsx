import React, { useEffect, useState } from "react";
import dataLocal from "../../assets/data/data.json";
import Search from "../Search/Search";
import TableConstructor from "./TableConstructor";

//import { useStyles } from "./Table1.style";

interface Address {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}
interface DataProps {
  [x: string]: number | string | Address;
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Address;
  description: string;
}

export default function Table2(): JSX.Element {
  //const classes = useStyles();
  const [data, setData] = useState(dataLocal);
  const [direction, setDirection] = useState(true);

  const [inputField, setInputField] = useState("");
  const [searchText, setSearchText] = useState("");

  const sortData = (column: string) => {
    const dataLocalCopy: DataProps[] = dataLocal.slice();
    let dataSort: DataProps[] = [];

    if (direction) {
      dataSort = dataLocalCopy.sort((a, b) => (a[column] > b[column] ? 1 : -1));
    } else if (!direction) {
      dataSort = dataLocalCopy
        .sort((a, b) => (a[column] > b[column] ? 1 : -1))
        .reverse();
    }

    setData(dataSort);
    setDirection(!direction);
  };

  /* INPUT */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputField(e.target.value); //отобразить введенный текст
    //getFilterData(e.target.value);
    //setSearchText(inputField); //изменить текст для поиска строки
    //console.log(searchText);
    //getFilterData(searchText); //искать строку по введенному тексту
    setSearchText(inputField);
    setData(() => getFilterData(searchText));
  };

  let columnName: string;
  for (const key in data[0]) {
    columnName = key;
  }
  const getFilterData = (text: string) => {
    if (!text) {
      return data;
    }
    const dataSearch = data.filter((el: DataProps) => {
      console.log(el[`${columnName}`]);
      return el[`${columnName}`]
        .toString()
        .toLowerCase()
        .includes(text.toLowerCase());
    });
    return dataSearch;
  };

  /*   const filterData = getFilterData();
  const limitCountPage = 50;
  const lastBlockRow = currentPageNumber * limitCountPage;
  const firstBlockRow = lastBlockRow - limitCountPage +1;
  const currentBlockRows = filterData.slice(firstBlockRow, lastBlockRow) */

  //const filterData = getFilterData(searchText);

  useEffect(() => {
    // getFilterData(inputField);
    setSearchText(inputField); //изменить текст для поиска строки
    //setData(()=>getFilterData);
    console.log(searchText);
    //setData(() => getFilterData(searchText));
    //getFilterData(searchText); //искать строку по введенному тексту
  }, [inputField, searchText]);

  return (
    <>
      <p>the table was created using the Material-UI(Table, TablePagination)</p>
      <Search handleChange={handleChange} inputField={inputField} />
      <TableConstructor
        dataTable={data}
        sortData={sortData}
        direction={direction}
      />
    </>
  );
}
