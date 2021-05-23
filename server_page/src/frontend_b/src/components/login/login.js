import React from "react";
// Modules

// MUI Core
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    border: "1px solid #3F51B5",
    padding: 20,
  },
  button: {
    background: "#3F51B5",
    color: "#FFFFFF",
  },
}));

const LoginPage = () => {
  const classes = useStyles();

  const onSubmit = () => {
    console.log("data");
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <form onSubmit={onSubmit} className={classes.form}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <img
                  src={
                    "https://image.freepik.com/free-vector/beer-farm-dummy-logo-design_197582-187.jpg"
                  }
                  alt=""
                  height="200px"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  size="small"
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Link to="/theme" style={{ textDecoration: "none" }}>
              <Button
                className={classes.button}
                fullWidth
                type="submit"
                variant="contained"
              >
                Log in
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LoginPage;
