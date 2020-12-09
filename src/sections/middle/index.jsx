import React from 'react';
import { Typography, Grid, Container} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { motion } from "framer-motion";
import BTN from '../../components/buttons'
const useStyles = makeStyles((theme) => ({
    root: {
        background: '#252323',
        color: 'white',
        paddingTop: '25px',
        paddingBottom: '125px',
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
        <>
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
                            <Grid classname={classes.buttonMargin} item xs={12} sm={12} md={3} lg={3} >
                                <BTN
                                    name="Contribute on GitHub"
                                    link="https://github.com/the-browser-toolbox"
                                    color="primary"
                                />
                            </Grid>
                            <Grid classname={classes.buttonMargin} item xs={12} sm={12} md={9} lg={9} >
                                <BTN
                                    link="https://gitter.im/the-browser-toolbox/community"
                                    name=" Join the Channel"
                                    color="secondary"
                                />


                            </Grid>
                        </Grid>

                    </Grid>

                </Container>
            </Grid>
        </>)
}
export default Middle;