import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(): JSX.Element {
  return (
    <nav>
      <NavLink
        exact
        to="/table1"
        style={{
          margin: 10,
          fontSize: 18,
          textDecoration: "none",
          color: "#e33371",
        }}
        activeStyle={{
          color: "#dc004e",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Table 1
      </NavLink>
      <NavLink
        exact
        to="/table2"
        style={{
          margin: 10,
          fontSize: 18,
          textDecoration: "none",
          color: "#e33371",
        }}
        activeStyle={{
          color: "#dc004e",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Table 2
      </NavLink>
    </nav>
  );
}
