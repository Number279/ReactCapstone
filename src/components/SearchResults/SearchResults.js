import React from 'react';
import classes from './SearchResults.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';


// const useStyles = makeStyles({
//     root: {
//       minWidth: 275,
//     },
//     bullet: {
//       display: 'inline-block',
//       margin: '0 2px',
//       transform: 'scale(0.8)',
//     },
//     title: {
//       fontSize: 14,
//     },
//     pos: {
//       marginBottom: 12,
//     },
//   });

const searchresults = (props) => {
    // const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const nonProfitArray = props.responseArray.data

    console.log("this is the nonProfitArray passed in state: ", nonProfitArray)

    const nonProfitList = nonProfitArray.map(nonProfit =>
        <div className = {classes.root}>
                                    <Grid 
                        container
                        // direction="column"
                        //  justify="center"
                        //  alignItems="center"
                          spacing={4}>
            <Grid item xs>
                <Box width="75%">
               <Card className={classes.root} variant="outlined">
                   <CardContent>
                {/* <h3>Help Near You:</h3> */}
                <Typography variant="h5" component="h2">
                {nonProfit.nonProfitName}
                </Typography>
                {/* <CardMedia
                className={classes.media}
                image={nonProfit.logo}
                title="Non-Profit Logo"
                /> */}
                <img className={classes.Logo} src = {nonProfit.logo} />
                <Typography className={classes.pos} color="textSecondary">
                {nonProfit.address}
                </Typography>
                <Typography variant="body2" component="p">
                {nonProfit.needs}
                <br />
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {nonProfit.email}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {nonProfit.hours}
                </Typography>


                {/* <p>Services: {nonProfit.needs}</p>
                <p>Address: {nonProfit.address}</p>
                <p>Hours of Operation: {nonProfit.hours}</p>
                <p>Email: {nonProfit.email}</p> */}
                </CardContent>
                <CardActions>
                <Button  href= {nonProfit.url }size="small" color="primary">
                 Website
                </Button>
                </CardActions>
                </Card>
                 </Box>
                 </Grid>
                 </Grid>

        </div>

    )
    console.log("NonProfitList: ", nonProfitList);

    return (
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}

            {props.loading && <div className={classes.Loader} />}

            {!props.error && !props.loading ?
                        <Grid 
                        container
                        direction="column"
                         justify="center"
                         alignItems="center"
                          spacing={3}>
            <Grid item xs>
                {nonProfitList}
            
                </Grid>
                </Grid>
        
            : null
            }
        </div>
    )
}

export default searchresults;