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
import {validate} from '../utils/validators';
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

const SignIn = () =>{
  const classes = useStyles();
  const auth = useContext(AuthContext);
  const [form,setForm] = useState({
      username:'',
      password:''
  })
  const formHandler = event =>{
    const input = event.target
    setForm({...form,[input.name]:input.value})
   }
  const submitHandler = event =>{
    event.preventDefault();
    console.log(event);
    if(form.username.length===0||form.password.length===0){
        alert('please complete form')
        return
    }
    //ready to send (form)
    console.log('dd')
    auth.login(DUMMY_USER.username,DUMMY_USER.token)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Link to='/signup'>SignUp</Link>
        </form>
      </div>
 
    </Container>
  );
}

export default SignIn;