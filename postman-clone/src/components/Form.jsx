import { Box, Select, MenuItem, TextField, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  select: {
    width: 150,
    height: 40,
  },
  textField: {
    width: "100%",
    background: "#F6F6F6",
  },
  button: {
    width: 100,
    height: 40,
    marginLeft: [5, "!important"],
  },
  component: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

const Form = () => {
  const classes = useStyles();

  return (
    <Box className={classes.component}>
      <Select label="GET" className={classes.select}>
        <MenuItem value={"GET"}>GET</MenuItem>
        <MenuItem value={"POST"}>POST</MenuItem>
      </Select>
      <TextField size="small" className={classes.textField} />
      <Button className={classes.button}>Send</Button>
    </Box>
  );
};

export default Form;
