import React from 'react';
import classes from './SearchResults.module.css'

const searchresults = (props) => {
    
    const nonProfitArray = props.responseArray.data

    console.log("this is the nonProfitArray passed in state: ", nonProfitArray)

    const nonProfitList = nonProfitArray.map(nonProfit =>
        <div>
                <h3>Help Near You:</h3>
                <p>{nonProfit.nonProfitName}</p>
                <p>{nonProfit.address}</p>
                <p>{nonProfit.hours}</p>
                <p>{nonProfit.email}</p>
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