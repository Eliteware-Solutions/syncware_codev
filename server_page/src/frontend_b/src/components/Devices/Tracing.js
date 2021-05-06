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
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { generate } from "shortid";
import Grid from '@material-ui/core/Grid';
import { useDropzone } from "react-dropzone";

const Dropzone = ({ onDrop, accept }) => {
  // Initializing useDropzone hooks with options
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept
  });
  return (
    <div {...getRootProps()}>
      <input className="dropzone-input" {...getInputProps()} />
      <div className="text-center">
        {isDragActive ? (
          <p className="dropzone-content">Release to drop the files here</p>
        ) : (
          <p className="dropzone-content">
            Drag 'n' drop some files here, or click to select files
          </p>
        )}
      </div>
    </div>
  );
};



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



export function Tracing() {
  const classes = useStyles();

  const aId = generate();
  const unrankedId = generate();


  const [rows, setRows] = React.useState([
    { id: aId, label: "a", urls: [] },
    {
      id: unrankedId,
      label: "unranked",
      urls: [
        "https://www.ssbwiki.com/images/thumb/b/b3/Olimar_SSBU.png/500px-Olimar_SSBU.png",
        "https://www.ssbwiki.com/images/thumb/b/b0/Olimar-Alt4_SSBU.png/500px-Olimar-Alt4_SSBU.png"
      ]
    }
  ]);

  


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
        {/* <Draggable> */}
        <DragDropContext
        // onDragEnd={({ destination, source}) => {
        // if (!destination) {
        //   return;
        // }
        //   setRows(reorderRows(rows, source, destination));
        // }}
        >        
        <Droppable droppableId='Devices'>
          {(provided) => (
            <Grid
            {...provided.draggableProps}              
            ref={provided.innerRef}
            >            
            <Draggable draggableId="TracingDevices">
              {(provided) => (           
              <ListItemAvatar 
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              >
                <Avatar alt="Keyence" src='../../../static/images/devices/tracing/W350.png' />
              </ListItemAvatar>
              )}
            </Draggable>
          
            </Grid>
            
          )}
          </Droppable>
        </DragDropContext>

        <ListItemText
          primary="Keyence W350"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                A Windows based handheld computer
              </Typography>
              <br />
              {"\r TCP/IP Communication"}
            </React.Fragment>
          }
        />
        
      </ListItem>
      <Divider variant="inset" component="li" />
      
    </List>
  );
}