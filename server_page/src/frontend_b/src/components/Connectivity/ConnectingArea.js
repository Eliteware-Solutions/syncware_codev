import React from 'react'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

import ListSubheader from '@material-ui/core/ListSubheader';
import ReceivingIcon from '@material-ui/icons/CallReceivedTwoTone';
import ReservingIcon from '@material-ui/icons/StoreTwoTone';
import ForwardIcon from '@material-ui/icons/FastForwardTwoTone';
import ShippingIcon from '@material-ui/icons/LocalShippingTwoTone';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

    root: {
      display: 'flex',
    },
    contentView: {
      flexGrow: 1,
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: 'none',
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
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      flexWrap: 'wrap',
      
    },
    container: { 
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
  
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    containerConnectivity : {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    containerConnectivityHeight: {
      height: 560,
    },
    containerLeftConnectivityWidth: {
      width: 120,
    },
    containerRightConnectivityWidth: {
      width: 480,
    },
    containerWarehouseArea: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    containerConnectivityArea: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(38),
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    button: {
      margin: theme.spacing(1),
    },



  }));



export function ConnectingArea() {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    const fixedLeftContainer = clsx(classes.containerConnectivity, classes.containerConnectivityHeight);
    const fixedRightContainer = clsx(classes.containerConnectivity, classes.containerConnectivityHeight);

    return (
        <Paper 
              className={fixedRightContainer}
              >
                <ListSubheader divider="true" id="nested-list-subheader">
                  Warehouse Connectivity
                </ListSubheader>

                <Grid
                container
                spacing={2}
                direction="column"
                justify="center"
                alignItems="stretch"
                >
                  <Grid 
                  item
                  >
                    <Paper   
                                  
                    className={classes.containerWarehouseArea}
                    elevation={15} 
                    >
                      <Typography
                      align="left"
                      >
                        Warehouse Area
                      </Typography>

                      <Grid
                      container
                      direction="row"
                      justify="center"
                      >
                        <Grid item>
                          <Button 
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          startIcon={<ReceivingIcon/>}
                          >
                            Receiving Area
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button 
                          disabled
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          startIcon={<ReservingIcon/>}
                          >
                            Reserve Area
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button 
                          disabled
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          startIcon={<ForwardIcon/>}
                          >
                            Forward Area
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button 
                          disabled
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          startIcon={<ShippingIcon/>}
                          >
                            Shipping Area
                          </Button>
                        </Grid>

                      </Grid>
                      
                    </Paper>
                  </Grid>

                  <Grid 
                  item
                  // xs={12}
                  // lg={8}  
                  >
                    <Paper 
                      
                    className={classes.containerConnectivityArea}
                    elevation={15} 
                    >
                      <Typography>
                        Connectivity Space
                      </Typography>

                      <DragDropContext>
                        <Droppable droppableId='Devices'>
                          {(provided) => (
                            <Paper 
                            {...provided.droppableProps} 
                            ref={provided.innerRef}>

                            </Paper>
                          )}
                        </Droppable>
                      </DragDropContext>
                      
                    </Paper>
                  </Grid>
                </Grid>

              </Paper>
    )
}



