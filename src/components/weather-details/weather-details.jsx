import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';
import GrainIcon from '@material-ui/icons/Grain';
import { Build } from '@material-ui/icons';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        justifyContent:'center',
        margin:'3rem'
    }
  }));
const stateIcons = {
    sunny: <WbSunnyIcon/>,
    fair: <CloudIcon />,
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
        state: stateIcons[props.state],
        unit: 'F'
       })
    },[props])
    const changeToCelsius = () =>{
        if(details.unit==='C'){
            return
        }
        const temp = Math.floor((details.temp -32)*(5/9))
        setDetails({...details,temp,unit:'C'})
    }
    const changeToFahrenheit = () =>{
        if(details.unit==='F'){
            return
        }
        const temp = Math.floor(details.temp*(9/5) +32)
        setDetails({...details,temp,unit:'F'})
    }
    return(
        <div className={classes.container}>
            <div>
                  { details.state }
            </div>
            <div>
                <h1>{details.place}</h1>
                <div>{details.time}</div>
                <div>{details.day}</div>     
                <div>{details.temp} {details.unit}</div>     
                <Button onClick={changeToCelsius}>Celsius</Button>   
                <Button onClick={changeToFahrenheit}>Fahrenheit</Button>                  
            </div>

        </div>
    )
}


export default WeatherDetails;