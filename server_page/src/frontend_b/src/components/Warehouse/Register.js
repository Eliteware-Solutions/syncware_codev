import React from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import Publish from '@material-ui/icons/Publish';

import AccountCircle from '@material-ui/icons/AccountCircle';
import axios from 'axios';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    contentView: {
      flexGrow: 1,
    },
    container: { 
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
  
    },
    textField: {
      width: '25ch',
      textAlign: 'center',
      // width: '100ch',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeightSignin: {
      height: 420,
    },
    fixedHeightControl: {
      height: 198,
    },
    button: {
      margin: theme.spacing(1),
    },
    margin: {
      margin: theme.spacing(1),
    },
  }));

  const initialFormData = Object.freeze({
    username: "",
    password: "",
    start_server: true
  });

  const initialcontrolServer = Object.freeze({
    restart_server: false,
    stop_server: false
  });


export function SYNCwareRegister() {

    

    const classes = useStyles();
    const theme = useTheme();
    const [formData, updateFormData] = React.useState(initialFormData);
    const [controlServer, updateControlServer] = React.useState(initialcontrolServer);
    const [values, setValues] = React.useState({
      amount: '',      
      passwordConfirm: '',
      weight: '',
      weightRange: '',
      showPassword: false,
      showPasswordConfirm: false,
    });

    const handleChangeInput = (e) => {
      updateFormData({
        ...formData,
  
        // Trimming any whitespace
        [e.target.name]: e.target.value.trim()
      });
    };

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleClickShowPasswordConfirm = () => {
      setValues({ ...values, showPasswordConfirm: !values.showPasswordConfirm });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleMouseDownPasswordConfirm = (event) => {
      event.preventDefault();
    };

    function getCookie(name) {
      var cookieValue = null;
      if (document.cookie && document.cookie !== '') {
          var cookies = document.cookie.split(';');
          for (var i = 0; i < cookies.length; i++) {
              var cookie = jQuery.trim(cookies[i]);
              if (cookie.substring(0, name.length + 1) === (name + '=')) {
                  cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                  break;
              }
          }
      }
      return cookieValue;
  }

    var csrftoken = getCookie('csrftoken');

    const handleStart = (e) => {
      e.preventDefault()

      const requestOptions = {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
          user_start_sw: formData.start_server,
        })
      };
      fetch('/start/', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    };

    const handleRestart = (e) => {
      e.preventDefault()

      const requestOptions = {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({        
          user_restart_sw: controlServer.restart_server,
        })
      };
      fetch('/restart/', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    };

    const handleStop = (e) => {
      e.preventDefault()

      const requestOptions = {
        credentials: 'include',
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
        body: JSON.stringify({
          user_stop_sw: controlServer.stop_server,
        })
      };
      fetch('/stop/', requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    };

    const fixedHeightSignin = clsx(classes.paper, classes.fixedHeightSignin);
    const fixedHeightControl = clsx(classes.paper, classes.fixedHeightControl);

    return (
    
    <div>

    <Typography className={classes.mainTitle} align="left" display="block" variant="h3" color="primary">
        SYNCware Platform Control
    </Typography>
    


    <Container maxWidth="lg" className={classes.container}>
        <Grid 
        container
        direction="row"
        justify="center"
        alignItems="stretch"
        spacing={4} >
            
            {/* Inside the sign in paper */}
            <Grid  container 
            // alignItems="flex-start" 
            direction="row"
            item 
            xs={12} md={2} lg={4}
            // justify="space-evenly"
            >
                <Paper className={fixedHeightSignin}>
                  <Typography align="center" variant='h6' 
                  >
                    SYNCware - OPC-UA 
                    <br/>
                    Authentication Configuration
                  </Typography>
                  <Typography align="center" variant='caption'
                  >
                    Username and Password can be left empty.
                    <br />
                    However, Authentication is recommended.
                    <br /> 
                    
                    <br /> 
                  </Typography>

                <Grid 
                container
                item
                direction="column"
                justify="space-evenly"
                alignItems="center"
                spacing={3}
                >                
                   <div className={classes.margin}>
                  <Grid item container spacing={1} alignItems="flex-end">
                    <Grid item>
                      <AccountCircle />
                    </Grid>
                    <Grid item>
                      <TextField 
                      id="input-with-icon-grid" 
                      label="username" 
                      name="username"
                      onChange={handleChangeInput}
                      />
                    </Grid>
                  </Grid>
                  </div>
                    
                  <Grid item spacing={3}>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="filled">
                      <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                      <FilledInput
                        id="filled-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
                        // value={values.password}
                        name="password"
                        onChange={handleChangeInput}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                          }
                        />
                      </FormControl>
                  </Grid>
                
                </Grid> 
                

                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<Publish />}
                    onClick={handleStart}
                  >
                    Start Server
                  </Button>

                  <Typography align="center" variant='caption'
                  >                    
                    Update this information in the plug-ins to access the platform.
                  </Typography>        
                </Paper>
            </Grid>

        

            <Grid 
              container
              item
              direction="column"
              xs={12} md={4} lg={3}
              // justify="space-evenly"
              // alignItems="center"
              spacing={3}
              >
                <Grid
                item
                >
                  <Paper className={fixedHeightControl}>
                    <Typography>
                      Restart Server
                    </Typography>

                    <Grid 
                    container
                    justify="center"
                    alignItems="center"
                    xs
                    >

                    <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<DoubleArrowIcon />}
                    onClick={handleRestart}
                    >
                      Restart Server
                    </Button>

                    </Grid>


                  </Paper>
                </Grid>

                <Grid
                item
                >
                  <Paper className={fixedHeightControl}>
                    <Typography>
                      Shutdown Server
                    </Typography>

                    <Grid 
                    container
                    justify="center"
                    alignItems="center"
                    xs
                    >

                      <Button 
                      
                      item
                      variant="contained"
                      color="secondary"
                      className={classes.button}
                      endIcon={<HighlightOffIcon />}
                      onClick={handleStop}
                      >
                        Shutdown Server
                      </Button>

                    </Grid>

                    
                    
                  </Paper>
                </Grid>
            </Grid>      

        </Grid>

            
       

        

        
    </Container>
    </div>
    )
}