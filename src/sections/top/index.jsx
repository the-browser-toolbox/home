import React from 'react';
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { motion } from "framer-motion";

const useStyles= makeStyles((theme)=>({
    root:{
        marginTop:'50vh'
    }   

}))

const Top = () => {
    const classes = useStyles();
    return (<center>
    <motion.div className={classes.root}>
     
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} gutterBottom={true}>
            <Typography textAlign="center" variant="h2">
                   Image Goes
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography textAlign="center" variant="h2">
                    The Browser Toolbox
                </Typography>
            </Grid>
        </Grid>
    
    </motion.div></center>
)}
export default Top;