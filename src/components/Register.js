import React from 'react';
// import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import {Button} from 'semantic-ui-react'

class Register extends React.Component {
  state = {
    username: "",
    password: "",
    confirmPassword: ""
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { username, password } = this.state
    return (
      <div className="form-container">
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
          {/* need to create handleSubmit function */}
          <label>Username:</label>
          <input type="text" name="username" onChange={this.handleInputChange} value={username} />
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleInputChange} value={password} />
          <label> Confirm Password:</label>
          <input type="password" name="confirmPassword" onChange={this.handleInputChange} value={password} />
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    )
  }
}

export default Register;
