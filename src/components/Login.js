import React from 'react';
// import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import {Button} from 'semantic-ui-react'

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="form-container">
        <h3>Login</h3>
        <form onSubmit={this.handleSubmit}> 
          <label>Email:</label>
          <input type="text" name="email" onChange={this.handleInputChange} value={email} />
          <label>Password:</label>
          <input type="password" name="password" onChange={this.handleInputChange} value={password} />
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    )
  }
}

export default Login;
