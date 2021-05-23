import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";

import Factory from "@material-ui/icons/Business";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";

import Account from "@material-ui/icons/AccountBalanceWallet";
import Settings from "@material-ui/icons/Settings";
import Help from "@material-ui/icons/Help";
import About from "@material-ui/icons/Info";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Route, MemoryRouter } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import ControlPoint from "@material-ui/icons/ControlPoint";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export function ShowItems(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  // const [inputValue,setInputValue] = React.useState('');

  const handleClick = () => {
    setOpen(!open);
  };

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    // console.log(index);
    props.onChange(index);
  };

  function handleChange(event) {
    props.onChange(event.target.value);
    // console.log(event.target.value);
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader inset component="div" id="nested-list-subheader">
          Main Menu
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={
          (event) => handleListItemClick(event, 0)
          // props.onSubmit(inputValue)
        }
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      {/* <input value={props.value} onChange={handleChange} /> */}

      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={handleClick}
        value={props.value}
        onChange={handleChange}
      >
        <ListItemIcon>
          <Factory />
        </ListItemIcon>
        <ListItemText primary="My Warehouse" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
            className={classes.nested}
          >
            <ListItemIcon>
              <ControlPoint />
            </ListItemIcon>
            <ListItemText primary="Platform Control" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2)}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>

      <ListItem
        button
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(event, 3)}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Connectivity" />
      </ListItem>

      <Divider />

      <ListSubheader inset>Extras</ListSubheader>
      <ListItem
        button
        selected={selectedIndex === 4}
        onClick={(event) => handleListItemClick(event, 4)}
      >
        <ListItemIcon>
          <Account />
        </ListItemIcon>
        <ListItemText primary="Billings" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 5}
        onClick={(event) => handleListItemClick(event, 5)}
      >
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 6}
        onClick={(event) => handleListItemClick(event, 6)}
      >
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 7}
        onClick={(event) => handleListItemClick(event, 7)}
      >
        <ListItemIcon>
          <Help />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 8}
        onClick={(event) => handleListItemClick(event, 8)}
      >
        <ListItemIcon>
          <About />
        </ListItemIcon>
        <ListItemText primary="About us" />
      </ListItem>
    </List>
  );
}

// export const mainListItems = (

// const menuNames = [
//     'Home', 'Dashboard', 'My Warehouse', 'Reports'
//   ]

//   const menuAux = [
//     'Billings', 'Settings', 'Help', 'About us'
//   ]

// PREVIOUS METHOD USED
// <List>
//       {menuNames.map((text, index) => (
//         <ListItem button key={text}>
//           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
//     </List>
//     <Divider />
//     <List>
//       {menuAux.map((text, index) => (
//         <ListItem button key={text}>
//           <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
//           <ListItemText primary={text} />
//         </ListItem>
//       ))}
//     </List>

//   <div>
