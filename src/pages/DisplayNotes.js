import { List, Fab, withStyles } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Note from "../components/Note";
import { Link } from "react-router-dom";


const styles = {
  fab: {
    position: 'absolute',
    bottom: "2rem",
    right: "2rem",
  }
};

function DisplayNotes(props) {
  const { notes, deleteNote, classes } = props;
  return (
    <>
      <List>
        {notes.map((note, index) => {
          return <Note note={note} key={index} deleteNote={deleteNote} />;
        })}
      </List>
      <Link to="/add"> {/* The Link component is similar to the HTML anchor element (<a>). */}
        <Fab
          aria-label={"Add"}
          className={classes.fab}>
          <Add />
        </Fab>
      </Link>

    </>
  );
}

export default withStyles(styles)(DisplayNotes);
