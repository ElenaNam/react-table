import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    marginBottom: theme.spacing(2),
    textAlign: "left",
  },
  text: {
    minWidth: 200,
    maxWidth: 500,
    width: "100%",
    minHeight: 30,
    border: "1px solid #B5B8B1",
    borderRadius: 5,
    outline: 0,
    "&:focus": {
      border: "1px solid #81c784",
    },
  },
  submit: {
    minHeight: 30,
    backgroundColor: theme.palette.success.light,
    border: "1px solid transparent",
    borderRadius: 5,
    marginLeft: theme.spacing(-0.7),
    outline: 0,
    "&:hover": {
      cursor: "pointer",
      border: "1px solid #388e3c",
    },
    "&:active": {
      cursor: "pointer",
      backgroundColor: "#388e3c",
      color: "white",
    },
  },
}));
