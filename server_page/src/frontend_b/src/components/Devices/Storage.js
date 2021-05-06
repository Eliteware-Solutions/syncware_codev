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

export function Storage() {
  const classes = useStyles();


  return (
    <List 
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
        <ListSubheader inset component="div" id="nested-list-subheader">
          Storage Systems
        </ListSubheader>
      }
    className={classes.root}
    >

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Dematic" src='../../../static/images/devices/storage/Dematic.png' />
        </ListItemAvatar>
        <ListItemText
          primary="Dematic"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                An ASRS fabricator
              </Typography>
              <br />
              {"\r Connect to dedicated PLC"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
  );
}