import React, { Component } from "react";
import { Collapse, List, ListItem, ListItemText, ListItemIcon, Button } from "@material-ui/core"
import { ExpandLess, ExpandMore, Delete } from "@material-ui/icons";/* collapsable notes */

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open }); /* when clicked, chnage the state to open */
  };

  render() {
    const { note, deleteNote} = this.props;
    const { open } = this.state;

    return (
      <>
        <ListItem>
          <ListItemIcon onClick={this.handleClick}>
            { open ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
          <ListItemText primary={note.title} />
          <ListItemIcon>
            <Button onClick={() => deleteNote(note)}>
              <Delete />
            </Button>
          </ListItemIcon>
          </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemText secondary={note.text} />
          </List>
        </Collapse>
      </>
    );
  }
}

export default Note;
