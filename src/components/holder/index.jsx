import React from "react";
import { makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import {
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,

  Button
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const Holder = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
     
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          target="_blank"
          href={props.github}
          size="small"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
      
      </CardActions>
    </Card>
  );
};
Holder.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  github: PropTypes.string,

};
export default Holder;
