import React, { useCallback, useEffect, useState } from "react";
import dataLocal from "../../assets/data/data.json";
import Search from "../Search/Search";
import TableConstructor from "./TableConstructor";

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
  address: { streetAddress: string; city: string; state: string; zip: string };
  description: string;
}

export default function Table2(): JSX.Element {
  const [data, setData] = useState(dataLocal);
  const [direction, setDirection] = useState(true);
  const [inputField, setInputField] = useState("");
  const [searchText, setSearchText] = useState("");

  /* SORTING */

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
    setSearchText(inputField);
    getFilterData(searchText);
  };

  //let columnName: string;
  //for (const key in data[0]) {
  //columnName = key; // id firstName lastName email phone address description
  //}

  const getFilterData = useCallback(
    (text: string) => {
      if (!text) {
        console.log("data");
        console.log(data);
        return data;
      }
      const dataSearch = data.filter((el: DataProps) => {
        //return el[`${columnName}`]
        return (
          el["id"].toString().toLowerCase().includes(text.toLowerCase()) ||
          el["firstName"].toLowerCase().includes(text.toLowerCase()) ||
          el["lastName"].toLowerCase().includes(text.toLowerCase()) ||
          el["email"].toLowerCase().includes(text.toLowerCase()) ||
          el["phone"].toLowerCase().includes(text.toLowerCase()) ||
          el["description"].toLowerCase().includes(text.toLowerCase())
        );
      });
      setData(dataSearch);
      return dataSearch;
    },
    [data]
  );

  useEffect(() => {
    setSearchText(inputField); //изменить текст для поиска строки
  }, [getFilterData, inputField, searchText]);

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
