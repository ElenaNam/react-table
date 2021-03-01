import React, { useState } from "react";
import { useStyles } from "./Search.style";

export default function Search(props: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputField: string;
}): JSX.Element {
  const classes = useStyles();
  const { handleChange, inputField } = props;

  return (
    <form className={classes.form}>
      <input
        type="text"
        value={inputField}
        placeholder="type here text"
        className={classes.text}
        onChange={handleChange}
      />
      {/* <input type="submit" value="search" className={classes.submit} /> */}
    </form>
  );
}
