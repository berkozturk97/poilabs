import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useState } from "react";
import styles from "./countryBox.module.css";

function CountryBox() {
  const [language, setLanguage] = useState("English");
  const handleLanguage = (e) => {
      setLanguage(e.target.value)
  }
  return (
    <FormControl className={styles.formControl}>
      <InputLabel id="demo-simple-select-helper-label">Language</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={language}
        onChange={handleLanguage}
      >
        <MenuItem value="English">
          <em>English</em>
        </MenuItem>
        <MenuItem value="Turkish">Turkish</MenuItem>
        <MenuItem value="Spanish">Spanish</MenuItem>
        <MenuItem value="Arabic">Arabic</MenuItem>
      </Select>
      <FormHelperText>
        Your preferences will be saved for next time
      </FormHelperText>
    </FormControl>
  );
}

export default CountryBox;
