import React from 'react';
// import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import {Button} from 'semantic-ui-react'
import { AuthContext } from '../contexts/AuthContext'

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

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.password === this.state.password_confirmation) {
      fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      })
      .then(response => response.json())
      .then(user => this.props.handleUpdateCurrentUser(user))
    } else {
      alert("Your passwords do not match.")
    }
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