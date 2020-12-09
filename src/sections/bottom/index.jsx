import React from 'react';
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { motion } from "framer-motion";

const useStyles= makeStyles((theme)=>({
    root:{
    
    },
    imagePadding:{
  
    }   

}))

const Bottom = () => {
    const classes = useStyles();
    return (
    <motion.div className={classes.root}>
     
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography gutterBottom={true} textAlign="center" variant="h2">
                   Extensions
                </Typography>
            </Grid>
        </Grid>
    
    </motion.div>
)}
export default Bottom;