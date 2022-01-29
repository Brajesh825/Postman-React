import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import CreateTable from "./CreateTable";

const useStyles = makeStyles({
  component: {
    marginTop: 20,
  },
  tabs: {
    textTransform: ["none", "!important"],
  },
});

const SelectTab = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <Box className={classes.component}>
      <Tabs
        TabIndicatorProps={{
          sx: { backgroundColor: "#F2683A", height: 4, bottom: 2 },
        }}
        textColor="none"
        value={value}
        onChange={handleChange}
      >
        <Tab className={classes.tabs} label="Params" />
        <Tab className={classes.tabs} label="Headers" />
        <Tab className={classes.tabs} label="Body" />
      </Tabs>
      <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
      >
        <CreateTable />
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
      >
        <CreateTable />
      </Box>
      <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
      >
        body
      </Box>
    </Box>
  );
};

export default SelectTab;
