import React from 'react';
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { motion } from "framer-motion";
import BTN from '../../components/buttons'
import variants from '../../data/animVariant'
import Links from '../../data/Links'
const useStyles = makeStyles((theme) => ({
    root: {
        background: '#252323',
        color: 'white',
        paddingTop: '80px',
        paddingBottom: '80px',
        paddingLeft: "4px"
    },
    headPadding: {
        marginBottom: '32px'
    },
    buttonMargin: {
        spacing: '10px'
    }

}))

const Middle = () => {
    const classes = useStyles();
    return (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.8 }}
        
        >
            <Grid className={classes.root}>
                <Container>
                    < Grid container >
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <Typography className={classes.headPadding} gutterBottom={true} variant="h3">
                                Personalization for web browsers
                        </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} >
                            <Typography gutterBottom={true} variant="body2">
                                Browser extensions are very powerful tools to enhance
                              the browsing experience.<br />We at <b> “The Browser ToolBox” </b>,
                             build super cool Open Source Browser Extensions to make lives easier.
                             <br /><br />
                            </Typography>
                        </Grid>
                        <Grid container spacing={4}>
                            <Grid classname={classes.buttonMargin} item xs={12} sm={12} md={2} lg={2} >
                                <BTN
                                    name="Fork on GitHub"
                                    link={Links.github}
                                    color="primary"
                                />
                            </Grid>
                            <Grid classname={classes.buttonMargin} item xs={12} sm={12} md={10} lg={10} >
                                <BTN
                                    link={Links.Gitter}
                                    name=" Join the Channel"
                                    color="secondary"
                                />


                            </Grid>
                        </Grid>

                    </Grid>

                </Container>
            </Grid>
        </motion.div>)
}
export default Middle;