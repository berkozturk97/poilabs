import { Switch } from "@material-ui/core";
import React from "react";
import styles from './visualDisabledMode.module.css';

function VisualDisabledMode() {
  return (
    <div>
      <Switch
        // checked={state.checkedB}
        // onChange={handleChange}
        color="primary"
        name="checkedB"
        className={styles.switch}
        inputProps={{ "aria-label": "primary checkbox" }}
      />

    </div>
  );
}

export default VisualDisabledMode;
