import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Container from "@material-ui/core/Container";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../Charts/Charts";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

import { ShowItems } from "../MenuList/ShowItems";

import { Dashboard } from "../Dashboard/Dashboard";
import { SYNCwareRegister } from "../Warehouse/Register";
import { Report } from "../Reports/Report";
import { Connectivity } from "../Connectivity/Connectivity";
import { Billing } from "../Billings/Billing";
import { Settings } from "../Settings/Setting";
import { Help } from "../Help/Help";
import { About } from "../About/About";
import { setRef } from "@material-ui/core";
import Users from "../Users/Users";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.syncware.ai/">
        SYNCware
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  contentView: {
    flexGrow: 1,
  },
  toolbar: {
    // display: 'flex',
    // // alignItems: 'center',
    // justifyContent: 'flex-end',
    // padding: theme.spacing(0, 1),
    // // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  mainTitle: {
    flexGrow: 1,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(0),
    paddingLeft: theme.spacing(7),
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    flexWrap: "wrap",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 260,
  },
  NotificationsIcon: {
    marginRight: 10,
  },
}));

function callbackFunction(childData) {
  setState({ message: childData });
}

export default function MiniDrawer(menuChosen) {
  const webPages = [
    "dashboard",
    "new_project",
    "reports",
    "integrations",
    "billings",
    "users",
    "settings",
    "help",
    "about",
  ];

  const currentPage = webPages[0]; // Start at dashboard

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [valueItemMenu, setMenuValue] = React.useState(0);

  const handleClickMenu = (event) => setSelectedIndex(event.target.value);

  function handleChange(newValue) {
    setMenuValue(newValue);
    console.log(newValue);
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const renderTabs = () => {
    if (valueItemMenu == 0) {
      return <Dashboard />;
    }
    if (valueItemMenu == 1) {
      return <SYNCwareRegister />;
    }
    if (valueItemMenu == 2) {
      return <Report />;
    }
    if (valueItemMenu == 3) {
      return <Connectivity />;
    }
    if (valueItemMenu == 4) {
      return <Billing />;
    }
    if (valueItemMenu == 5) {
      return <Users />;
    }
    if (valueItemMenu == 6) {
      return <Settings />;
    }
    if (valueItemMenu == 7) {
      return <Help />;
    }
    if (valueItemMenu == 8) {
      return <About />;
    } else {
      return <h1>404 Not Found</h1>;
    }
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            SYNCware
          </Typography>
          <IconButton color="inherit" className={classes.NotificationsIcon}>
            <Badge badgeContent={1} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Button
              color="secondary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Logout
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            {/* {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />} */}
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        {/* Menu names */}
        {/* <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List> */}
        <ShowItems value={valueItemMenu} onChange={handleChange} />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />

        {/* Call the renderTabs function to update based on clicks
        Information coming from the ShowItems Child */}
        {renderTabs()}

        <Box pt={4}>
          <Copyright />
        </Box>
      </main>
    </div>
  );
}
