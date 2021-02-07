import React,{useState,useContext} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';
import {AuthContext} from '../context/auth-context';
import ErrorModal from '../components/ui-elements/ErrorModal';
import LoadingSpinner from '../components/ui-elements/LoadingSpinner';
const DUMMY_USER ={
    username:'fares',
    token:'123123'
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUp = () =>{
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const [form,setForm] = useState({
    username:'',
    password:'',
    confirm_password:''
})
const [error,setError] = useState(false)
const [isLoading,setIsLoading] = useState(false)
  const formHandler = event =>{
    const input = event.target
    setForm({...form,[input.name]:input.value})
   }
   const clearError = () =>{
    setError(null)
}
   const submitHandler = async event =>{
    event.preventDefault();
    console.log(form)
    console.log(event);
    if(form.username.length===0||form.password.length===0||form.confirm_password===0){
        return setError('please complete the form')
    }
    if(form.password!==form.confirm_password){
        return setError(`passwords doesn't match`)
    }
    try{
      const token = await fetch('http://localhost:3001/signup',
      {
        method:'POST',
       headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          username:form.username,
          password: form.password
        })
      })
      console.log(form.username,token)
     return auth.login(form.username,token)
   }catch(err){
     setError(err)
   }
    //ready to send (form)
    //ready to send (form)
    //remember to add the error modal and isloading modal
  }
  return (
    <React.Fragment>
    <ErrorModal error={error} 
      onClear={clearError} 
    />
    {isLoading && <LoadingSpinner asOverlay />}
  <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
          <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
          Sign up
          </Typography>
          <form className={classes.form} noValidate
          onSubmit={submitHandler}>
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
              onChange={formHandler}
          />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={formHandler}
          />
          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirm_password"
              label="confirm-Password"
              type="password"
              id="confirm-password"
              autoComplete="confirm-password"
              onChange={formHandler}
          />

          <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
          >
              Sign Up
          </Button>
          </form>
          <Link to='/signin'>SignIn</Link>
      </div>
      </Container>
  </React.Fragment>
  );
}

export default SignUp;