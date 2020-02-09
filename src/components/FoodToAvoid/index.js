import React, {Component} from 'react';
import Stats from "../stats";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import Avoid from "./Avoid";



const styles = theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            flexWrap: 'nowrap',
            flexGrow: 1,
        }
    },
});

function FoodToAvoid(props){
    const { classes } = props;
    return (
        <div className={classes.container}>
            <Stats />
            <Avoid/>
        </div>
    );
}
FoodToAvoid.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FoodToAvoid);