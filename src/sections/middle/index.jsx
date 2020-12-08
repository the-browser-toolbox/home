import React from 'react';
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { motion } from "framer-motion";
const useStyles= makeStyles((theme)=>({
    root:{
      background:'#252323'
    },
    imagePadding:{
        marginBottom:'32px'
    }   

}))

const Middle = () => {
    const classes = useStyles();
    return (
    <>
        <Grid className={classes.root}>
            <Container>
                <Typography>     
                     s
                </Typography>
            </Container>
        </Grid>
    </>)
}
export default Middle;