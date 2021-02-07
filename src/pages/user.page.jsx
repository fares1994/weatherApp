import React,{useState} from 'react';
import './user.style.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Button from '@material-ui/core/Button';
import ErrorModal from '../components/ui-elements/ErrorModal';
const DUMMY_WEATHER_DATA = {
    weatherState:'sunny',
    tempF: 70, 
    date: '7/2/2021',
    placeName: 'name',
    observationDate:'23:23',
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
    stateIcon:{
        width:'10rem',
        height:'10rem'
    },
    iconContainer:{
        margin:'3rem'
    },
    submit:{
        margin:'5px'
    }
  }));
const UserPage = () =>{
    const classes = useStyles();
    const [place,setPlace] = useState('')
    const [error,setError] = useState(false)
    const inputHandler = event =>{
        setPlace(event)
    }
    const handleSearch = event =>{
        event.preventDefault();
        if(place.length===0){
            return setError('please enter a place')
        }
        console.log(place)
        //to be fetched.....
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
        <div className={classes.info}>
          <div className={classes.iconContainer}>
             <WbSunnyIcon className={classes.stateIcon}/>
          </div>
        <div className={classes.details}>
           <h3>amman</h3>
           <div>sunday 9:30</div>
           <div>weather state</div>
           <div className={classes.temp}>
               add temp component
            </div>
        </div>
        </div>
       </div>
   )
}

export default UserPage;