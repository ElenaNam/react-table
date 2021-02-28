import { Collapse } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(() => ({
  content: {
    margin: "0 auto",
    height: "80vh",
    backgroundColor: "#E5DDFF",
    borderSpacing: "1px",
  },
  caption: {
    padding: 5,
    fontSize: 22,
  },
  th: {
    padding: 3,
    whiteSpace: "nowrap",
  },
  tr: {},
  td: {
    padding: "2px 10px",
    /* minWidth: 110, */
  },
}));
