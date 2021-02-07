import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import GrainIcon from '@material-ui/icons/Grain';
const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        justifyContent:'center'
    }
  }));
const stateIcons = {
    sunny: WbSunnyIcon,
    cloud: CloudIcon,
    rainny: GrainIcon
}
const WeatherDetails = props =>{
    const classes = useStyles()

    return (
        <div className={classes.container}>
           
         WeatherDetails
        </div>
    )
}


export default WeatherDetails;