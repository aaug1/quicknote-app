import React, { Component } from "react";
import { Button, Container } from "@material-ui/core";
import DisplayNotes from "./pages/DisplayNotes";
import UpsertNote from "./pages/UpsertNote";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import { Edit } from "@material-ui/icons";/* collapsable notes */
import { v4 as uuidv4 } from "uuid";





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //showHomepage: true, // Not needed anymore due to router component
      notes: [],
    };
  }

  /* Delete a note. Takes in a note, and uses setState, which is called with a FUNCTION argument. 
  this receives the current state, and will return the updated state */
  deleteNote = (note) => {
    this.setState((state) => {
      return {
        notes: state.notes.filter((n) => n.id !== note.id),
      };
    }, this.saveNotes);
  };

  // Final Step (Step 8 in Quicknote App [III])
  saveNotes = () => {
    window.localStorage.setItem("notes", JSON.stringify(this.state.notes));
  };

  componentDidMount() {
    const notes = window.localStorage.getItem("notes");
    this.setState({
      notes: notes ? JSON.parse(notes) : [],
    });
  }
  
  

  /* This will change the page to create a new note */
  /*
  changePage = () => {
    this.setState((state) => {
      return {
        showHomepage: !state.showHomepage,
      };
    });
  };
  */

  /* To use when we do not have router
  render() {
    const { notes, showHomepage } = this.state;
    return (
      <Container>
        {showHomepage ? (
          <DisplayNotes
            notes={notes}
            deleteNote={this.deleteNote}
            changePage={this.changePage}
          />
        ) : (
          <AddNote changePage={this.changePage} />
        )}
      </Container>
    );
  }
  */

  // Step 8: Addnote
  addNote = (note) => {
    this.setState((state) => {
      return {
        notes: [...state.notes, Object.assign(note, { id: uuidv4() })],
      };
    }, this.saveNotes);
  }

  editNote = (note) => {
    this.setState((state) => {
      return {
        notes: state.notes.map(n => n.id === note.id ? note : n),
      };
    }, this.saveNotes);
  };



  NoMatch() {
    return (
      <div>
        <h3>
          404 - Not Found!
        </h3>
        
        <Link to="/">
            <Button type="button">
              Return to Course Planner Homepage
            </Button>
          </Link>
      </div>
    );
  }



  render() {
    const { notes } = this.state;
    return (
      <Container>
        <Switch> {/* Switch component looks through all its children <Route> elements and renders the first one whose path matches the current URL */}
          <Route exact path="/">
            <DisplayNotes notes={notes} deleteNote={this.deleteNote} />
          </Route>
          <Route path="/add">
            <UpsertNote upsertNote={this.addNote} />
          </Route>
          <Route path="/edit">
            <UpsertNote upsertNote={this.editNote} />
          </Route>
          <Route path="*">
            <this.NoMatch />
          </Route>

        </Switch>
      </Container>
    );
  }





}

export default App;
