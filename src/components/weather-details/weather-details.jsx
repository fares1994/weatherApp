import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import GrainIcon from '@material-ui/icons/Grain';
const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        justifyContent:'center',
        margin:'3rem'
    }
  }));
const stateIcons = {
    sunny: <WbSunnyIcon className/>,
    cloud: <CloudIcon />,
    rainy: <GrainIcon />
}
const WeatherDetails = props =>{
    const classes = useStyles()
    const [details,setDetails] = useState({
        place:'',
        time:'',
        temp:'',
        state:'',
        day:''
    })
    useEffect(()=>{
      
       setDetails({
        place:props.place,
        time:props.time,
        temp:props.temp,
        day: props.day,
        state: stateIcons[props.state]
       })
    },[props])
    return (
        <div className={classes.container}>
            <div>
                  { details.state }
            </div>
            <div>
                <h1>{details.place}</h1>
                <div>{details.time}</div>
                <div>{details.day}</div>             
            </div>

        </div>
    )
}


export default WeatherDetails;