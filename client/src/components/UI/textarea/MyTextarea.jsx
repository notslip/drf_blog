import React from 'react';
import classes from "./MyTextarea.module.css"

const MyTextarea = ({children, ...props}) => {
    return (
        <textarea {...props} className={classes.myTextar}>
            {children}
        </textarea>
    );
};

export default MyTextarea;