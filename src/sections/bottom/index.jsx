import React from 'react';
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { motion } from "framer-motion";
import { useRepo } from '../../hooks/github';

const useStyles = makeStyles((theme) => ({
    root: {
       paddingBottom:'25px',
        paddingTop:'22px',
        background:'#939191',
        color:'white'
    },
    imagePadding: {

    }

}))

const Bottom = () => {
    const repos = useRepo();
    const classes = useStyles();
    return (
        <motion.div className={classes.root}>

            <Grid container>
                <Container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography gutterBottom={true} textAlign="center" variant="h2">
                            Extensions
                </Typography>
                        {repos.map((item, index) => (<Typography>{item.name}</Typography>))}
                    </Grid>
                </Container>
            </Grid>

        </motion.div>
    )
}
export default Bottom;