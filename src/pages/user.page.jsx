import React,{useState} from 'react';
import './user.style.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ErrorModal from '../components/ui-elements/ErrorModal';
import WeatherDetails from '../components/weather-details/weather-details';
const DUMMY_WEATHER_DATA = {
    weatherState:'sunny',
    tempF: 70, 
    date: '7/2/2021',
    placeName: 'name',
    observationTime:'23:23',
    day:'sunday'
}
const useStyles = makeStyles((theme) => ({
    userpage_container:{
       margin:'3px'
        
    },
    heading:{
        gridColumnStart: 1,
        gridColumnEnd: 3
    },
    form:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    info:{
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    submit:{
        margin:'5px'
    }
  }));
const UserPage = () =>{
    const classes = useStyles();
    const [place,setPlace] = useState('')
    const [error,setError] = useState(false)
    const [data,setData] = useState({})
    const inputHandler = event =>{
        setPlace(event)
    }
    const handleSearch = event =>{
        event.preventDefault();
        if(place.length===0){
            return setError('please enter a place')
        } 
        console.log(place)
        // then fetch
        setData(DUMMY_WEATHER_DATA)
        // handle error later
    }
    const clearError = () =>{
        setError(false)
    }
   return(
        <div className={classes.userpage_container}>
            <ErrorModal 
            error={error} 
            onClear={clearError} 
            />
            <h1 className={classes.heading}>Welcome username</h1>
            <form className={classes.form} 
            noValidate 
            autoComplete="off"
            onSubmit={handleSearch}>
            <TextField 
            id="outlined-basic" 
            label="place-name" 
            variant="outlined" 
            onChange={inputHandler}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                    Search
             </Button>
            </form>
            {
                Object.keys(data).length === 0? <div>please select a place</div> 
                :<WeatherDetails
                   place={data.placeName}
                   time={data.observationTime}
                   temp={data.tempF}
                   state={data.weatherState}
                   day={data.day}
                />
            }
       </div>
   )
}

export default UserPage;