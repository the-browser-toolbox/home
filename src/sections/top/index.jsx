import React from 'react';
import { Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import variants from '../../data/animVariant'
import { motion } from "framer-motion";
import Logo from './assets/logo.svg'
const useStyles= makeStyles((theme)=>({
    root:{
        marginTop:'18%',
        marginBottom:'20px'
    },
    imagePadding:{
        marginBottom:'32px'
    }   

}))

const Top = () => {
    const classes = useStyles();
    return (<center>
    <motion.div
    initial="hidden"
    animate="visible"
    variants={variants}
    transition={{ duration: 1 }}
    className={classes.root}>
     
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} gutterBottom={true}>
               <img className={classes.imagePadding}src ={Logo} alt="logo" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography gutterBottom={true} textAlign="center" variant="h2">
                    The Browser Toolbox
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Typography gutterBottom={true} textAlign="center" variant="body2">
               Nobody does it better!<br/> Extensions do make life easier
                </Typography>
            </Grid>
        </Grid>
    
    </motion.div></center>
)}
export default Top;