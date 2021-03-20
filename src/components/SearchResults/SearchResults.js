import React from 'react';
import classes from './SearchResults.module.css'

const searchresults = (props) => {
    
    const nonProfitArray = props.responseArray.data

    console.log("this is the nonProfitArray passed in state: ", nonProfitArray)

    const nonProfitList = nonProfitArray.map(nonProfit =>
        <div>
                <h3>Help Near You:</h3>
                <p>Name: {nonProfit.nonProfitName}</p>
                <p>Services: {nonProfit.needs}</p>
                <p>Address: {nonProfit.address}</p>
                <p>Hours of Operation: {nonProfit.hours}</p>
                <p>Email: {nonProfit.email}</p>
        </div>

    )
    console.log("NonProfitList: ", nonProfitList);

    return (
        <div className={classes.Wrapper}>
            {props.error && <small className={classes.Small}>Please enter a valid city.</small>}

            {props.loading && <div className={classes.Loader} />}

            {!props.error && !props.loading ?
            <div>
                {nonProfitList}
            </div>
            : null
            }
        </div>
    )
}

export default searchresults;