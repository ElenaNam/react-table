import React, { useState, useEffect } from "react";
import axios from "axios";
import { DataGrid, ColDef } from "@material-ui/data-grid/";
import { useStyles } from "./Table1.style";
import commentsLocal from "../../assets/data/comments.json";

const columns: ColDef[] = [
  { field: "id", headerName: "№", width: 70, type: "number" },
  { field: "postId", headerName: "PostId", width: 100, type: "number" },
  { field: "name", headerName: "Name", width: 400, type: "string" },
  { field: "email", headerName: "Email", width: 200, type: "string" },
  {
    field: "body",
    headerName: "Body",
    flex: 1,
    type: "string",
  },
];

interface CommentsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function Table1(): JSX.Element {
  const classes = useStyles();
  const [data, setData] = useState<CommentsProps[]>(commentsLocal);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const res = result.data.map(
        (item: {
          postId: number;
          id: number;
          name: string;
          email: string;
          body: string;
        }) => {
          return {
            id: item.id,
            postId: item.postId,
            name: item.name,
            email: item.email,
            body: item.body,
          };
        }
      );
      setData(res);
    };
    fetchData().catch(() => {
      const res1 = commentsLocal.map((item) => {
        return {
          id: item.id,
          postId: item.postId,
          name: item.name,
          email: item.email,
          body: item.body,
        };
      });
      console.log(res1);
      setData(res1);
    });
  }, []);

  return (
    <div className={classes.content}>
      <p>the table was created using the Material-UI(DataGrid)</p>
      <p>getting data via the api</p>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[10, 25, 50]}
        rowHeight={70}
        //checkboxSelection
      />
    </div>
  );
}
