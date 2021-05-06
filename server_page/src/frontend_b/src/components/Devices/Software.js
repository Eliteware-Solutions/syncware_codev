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

export function Software() {
  const classes = useStyles();


  return (
    <List 
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader={
        <ListSubheader inset component="div" id="nested-list-subheader">
          Specialized Software
        </ListSubheader>
      }
    className={classes.root}
    >

      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SAP" src='../../../static/images/devices/software/SAP.png' />
        </ListItemAvatar>
        <ListItemText
          primary="SAP"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                A Warehouse Management Software
              </Typography>
              <br />
              {"\r API Access"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
  );
}