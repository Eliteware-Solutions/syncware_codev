import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    height: 260,
  },
  table: {
    minWidth: 650,
  },
  PersonAddIcon: {
    fontSize: 30,
    cursor: 'pointer',
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper2: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Users() {
  const classes = useStyles();
  const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [rows, setRow] = useState([
    {
      id: 1,
      username: 'John',
      usertype: 'Admin',
      active: 'online',
      action: 0,
    },
    {
      id: 2,
      username: 'Robert',
      usertype: 'Manager',
      active: 'online',
      action: 0,
    },
    {
      id: 3,
      username: 'Client',
      usertype: 'Admin',
      active: 'online',
      action: 0,
    },
    {
      id: 4,
      username: 'Ervin Howell',
      usertype: 'Manager',
      active: 'online',
      action: 0,
    },
    {
      id: 5,
      username: 'Patricia Lebsack',
      usertype: 'Admin',
      active: 'online',
      action: 0,
    },
  ]);
  const Deleterow = (e) => {
    // console.log(value);
    // rows.push(createData("Patricia Lebsack", "Admin", "online", 0));
    const spanname = e.target.getAttribute('id');
    console.log(spanname);
    setRow(rows.filter((item) => item.id.toString() !== spanname.toString()));
  };
  const [rowLength, setRowLength] = useState(rows.length + 1);

  useEffect(() => {
    console.log('inside useeffect');
    setRowLength(rows.length + 1);
  }, [, rows]);

  const [add, setAdd] = useState({
    id: rows.length + 1,
    username: '',
    usertype: '',
    active: '',
    action: 0,
  });

  const AddUser = () => {
    console.log(add);
    rows.push(add);
    handleClose();
  };
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = useState({
    id: '',
    edit: false,
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdd({
      ...add,
      [name]: value,
      id: rows.length + 1,
    });
  };
  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setAdd({
      ...add,
      [name]: value,
      id: edit.id,
    });
  };
  const editUser = () => {
    setRow((prev) => prev.map((item) => (item.id === edit.id ? add : item)));
    setEdit({ edit: false });
  };
  return (
    <div>
      <Typography
        className={classes.mainTitle}
        align='left'
        display='block'
        variant='h3'
        color='primary'
      >
        Users
      </Typography>

      <Container maxWidth='lg' className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <div
              className='addicon'
              style={{ textAlign: 'right', fontSize: '30px' }}
            >
              <PersonAddIcon
                className={classes.PersonAddIcon}
                onClick={handleOpen}
              />
            </div>
            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                size='small'
                aria-label='a dense table'
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell align='right'>UserType</TableCell>
                    <TableCell align='right'>Active</TableCell>
                    <TableCell align='right'>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => {
                    return (
                      <TableRow key={row.username}>
                        <TableCell component='th' scope='row'>
                          {row.username}
                        </TableCell>
                        <TableCell align='right'>{row.usertype}</TableCell>
                        <TableCell align='right'>{row.active}</TableCell>
                        <TableCell align='right'>
                          <EditIcon
                            onClick={() => setEdit({ id: row.id, edit: true })}
                            style={{ marginLeft: '5px', cursor: 'pointer' }}
                          />
                          <img
                            src='https://static.thenounproject.com/png/3445515-200.png'
                            onClick={Deleterow}
                            id={row.id}
                            height='20px'
                            style={{ marginLeft: '5px', cursor: 'pointer' }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper2}>
                <h2 id='transition-modal-title'>Add User</h2>
                <TextField
                  placeholder='Username'
                  value={add.username}
                  onChange={handleInputChange}
                  name='username'
                />
                <TextField
                  placeholder='Usertype'
                  value={add.usertype}
                  onChange={handleInputChange}
                  name='usertype'
                />
                <TextField
                  placeholder='Active'
                  value={add.active}
                  onChange={handleInputChange}
                  name='active'
                />
                <Button variant='contained' color='secondary' onClick={AddUser}>
                  Add
                </Button>
              </div>
            </Fade>
          </Modal>
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            className={classes.modal}
            open={edit.edit}
            onClose={() => setEdit({ edit: false })}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={edit.edit}>
              <div className={classes.paper2}>
                <h2 id='transition-modal-title'>Edit User</h2>
                <TextField
                  placeholder='Username'
                  value={add.username}
                  onChange={handleEditInputChange}
                  name='username'
                />
                <TextField
                  placeholder='Usertype'
                  value={add.usertype}
                  onChange={handleEditInputChange}
                  name='usertype'
                />
                <TextField
                  placeholder='Active'
                  value={add.active}
                  onChange={handleEditInputChange}
                  name='active'
                />
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={editUser}
                >
                  Edit
                </Button>
              </div>
            </Fade>
          </Modal>
        </Grid>
      </Container>
    </div>
  );
}

export default Users;
