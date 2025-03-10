import React from "react";
import { PacmanLoader } from "react-spinners";
import { green } from "@mui/material/colors";
import styles from "./style/spinner.module.css";


const Spinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <PacmanLoader color={green[500]} size={50} />
        </div>
    );
};

export default Spinner;
