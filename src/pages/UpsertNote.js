import React, { Component } from "react";
import { FormControl, TextField, Button, Paper } from "@material-ui/core";
import { withRouter } from "react-router";

const styles = {
  form: {
    marginTop: "2rem",
    marginBottom: "1rem",
    padding: "1rem",
  },
  paper: {
    marginBottom: "1rem",
  },
};


class UpsertNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.location.state.id || undefined,
      title: this.props.location.state.title || "",
      text: this.props.location.state.text || "",
    };
  }
  

  updateTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  updateText = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  // Step 8:
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.props.history.push("/");
  };


  handleCancel = (event) => {
    event.preventDefault();
    this.props.history.push("/");
  };

  render() {
    return (
      <form style={styles.form}>
        <Paper elevation={3} style={styles.paper}></Paper>
        <FormControl fullWidth>
          <TextField
            label="Title"
            variant="outlined"
            value={this.state.title}
            onChange={this.updateTitle}
          />
        </FormControl>
        <Paper elevation={3} style={styles.paper}>
        <FormControl fullWidth>
          <TextField
            label="Text"
            multiline
            rows={6}
            variant="outlined"
            value={this.state.text}
            onChange={this.updateText}
          />
        </FormControl>
        </Paper>
        <div>
          <Button type="button" color="secondary" onClick={this.handleCancel}>
            Cancel
          </Button>
          <Button type="submit" color="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </div>
      </form>
    );
  }
}

export default withRouter(UpsertNote);
