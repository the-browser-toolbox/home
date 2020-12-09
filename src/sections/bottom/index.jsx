import React from 'react';
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import { motion } from "framer-motion";
import { useRepo } from '../../hooks/github';
import variants from '../../data/animVariant';
import Project from '../../components/holder/'
const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: '25px',
        paddingTop: '22px',
        background: '#939191',
        color: 'white'
    },
    imagePadding: {

    }

}))

const Bottom = () => {
    const repos = useRepo();
    const classes = useStyles();
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1 }}
            className={classes.root}>

            <Grid container>
                <Container>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography gutterBottom={true} textAlign="center" variant="h2">
                            Extensions
                        </Typography>
                        <Grid container spacing={3}>
                            {repos.map((item, index) => (
                                <Grid item xs={12} sm={12} md={4} lg={4}>
                                    
                                    <Project name={item.name}
                                        desc={item.description}
                                        github={item.github}
                                        issues={item.issueUrl}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Grid>

        </motion.div>
    )
}
export default Bottom;