import React from 'react';
import { Typography, Grid, Container, Button } from "@material-ui/core";

const BTN = (props) =>{

    return(
        <>
        <Button
        variant="outlined"
        target="_blank"
        color={props.color}
        rel="noopener noreferrer"
        href={props.link}
        >
            {props.name}
        </Button>
        </>
    )

}
export default BTN;