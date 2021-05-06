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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import { Software } from '../Devices/Software';
import { Tracing } from '../Devices/Tracing';
import { Conveyors } from '../Devices/Conveyors';
import { Vehicles } from '../Devices/Vehicles';
import { Storage } from '../Devices/Storage';
import { Palletizing } from '../Devices/Palletizers';
import { Picking } from '../Devices/Picking';



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

export function MenuDevices() {
  const classes = useStyles();
  
  const [openSCS, setOpenSCS] = React.useState(false);
  const [openTS, setOpenTS] = React.useState(false);
  const [openC, setOpenC] = React.useState(false);
  const [openAV, setOpenAV] = React.useState(false);
  const [openSS, setOpenSS] = React.useState(false);
  const [openPDP, setOpenPDP] = React.useState(false);
  const [openPK, setOpenPK] = React.useState(false);


  const handleClickSCS = () => {
      setOpenSCS(!openSCS);
  };
  const handleClickTS = () => {
      setOpenTS(!openTS);
  };
  const handleClickC = () => {
    setOpenC(!openC);
  };
  const handleClickAV = () => {
    setOpenAV(!openAV);
  };
  const handleClickSS = () => {
    setOpenSS(!openSS);
  };
  const handleClickPDP = () => {
    setOpenPDP(!openPDP);
  };
  const handleClickPK = () => {
    setOpenPK(!openPK);
  };

  const coreFunctionalities = [
      'Supply Chain Software',
      'Tracing Systems',
      'Conveyors',
      'Autonomous Vehicles',
      'Storage Systems',
      'Palletizing/Depalletizing',
      'Picking Systems'
  ]

  // TODO: Use Map to loop over and simplify the logic

  return (
    <List 
    justify="center"
    component="nav"
    aria-labelledby="nested-list-subheader"
    className={classes.root}
    >

        <ListSubheader divider="true" id="nested-list-subheader">
          Warehouse Devices
        </ListSubheader>
    
        <ListItem 
        button
        alignItems="center"
        divider
        onClick={handleClickSCS}
        >
            <ListItemText
            primary={coreFunctionalities[0]}
            />
            {openSCS ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSCS} timeout="auto" unmountOnExit>
              <Software />
        </Collapse>

        <ListItem 
        button
        alignItems="center"
        divider="true"
        onClick={handleClickTS}
        >
            <ListItemText
            primary={coreFunctionalities[1]}
            />
            {openTS ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTS} timeout="auto" unmountOnExit>
              <Tracing />
        </Collapse>

        <ListItem 
        button
        alignItems="center"
        divider="true"
        onClick={handleClickC}
        >
            <ListItemText
            primary={coreFunctionalities[2]}
            />
            {openC ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openC} timeout="auto" unmountOnExit>
              <Conveyors />
        </Collapse>

        <ListItem 
        button
        alignItems="center"
        divider="true"
        onClick={handleClickAV}
        >
            <ListItemText
            primary={coreFunctionalities[3]}
            />
            {openAV ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openAV} timeout="auto" unmountOnExit>
              <Vehicles />
        </Collapse>

        <ListItem 
        button
        alignItems="center"
        divider="true"
        onClick={handleClickSS}
        >
            <ListItemText
            primary={coreFunctionalities[4]}
            />
            {openSS ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSS} timeout="auto" unmountOnExit>
              <Storage />
        </Collapse>

        <ListItem 
        button
        alignItems="center"
        divider="true"
        onClick={handleClickPDP}
        >
            <ListItemText
            primary={coreFunctionalities[5]}
            />
            {openPDP ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPDP} timeout="auto" unmountOnExit>
              <Palletizing />
        </Collapse>

        <ListItem 
        button
        alignItems="center"
        divider="true"
        onClick={handleClickPK}
        >
            <ListItemText
            primary={coreFunctionalities[6]}
            />
            {openPK ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openPK} timeout="auto" unmountOnExit>
              <Picking />
        </Collapse>

        




    </List>
  );
}