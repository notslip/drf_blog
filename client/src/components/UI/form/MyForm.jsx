import React from 'react';
import classes from "./MyForm.module.css";

const MyForm = ({children, ...props}) => {
    return (
        <form {...props} className={classes.myForm}>
            {children}
        </form>
    );
};

export default MyForm;