import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export function Vehicles() {
  const classes = useStyles();


  return (
    <List 
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
        <ListSubheader inset component="div" id="nested-list-subheader">
          Vehicles (AGV & AMR)
        </ListSubheader>
      }
    className={classes.root}
    >

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Husky" src='../../../static/images/devices/vehicles/Husky.png' />
        </ListItemAvatar>
        <ListItemText
          primary="Husky"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                A Clearpath Robot
              </Typography>
              <br />
              {"\r ROS controlled robot"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Mobile base Fetch" src="../../../static/images/devices/vehicles/FetchManipulator.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Freight Mobile Robot Base"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                A Fetch Robot
              </Typography>
              <br />
              {"ROS controlled robot"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Mobile Manipulator Fetch" src="../../../static/images/devices/vehicles/FetchFreight.png" />
        </ListItemAvatar>
        <ListItemText
          primary="Fetch Mobile Manipulator"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                A Fetch Robot
              </Typography>
              <br />
              {'ROS controlled robot'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}