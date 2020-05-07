import React from 'react';
// import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import {Button} from 'semantic-ui-react'

class Register extends React.Component {
  state = {
    email: "",
    first_name: "",
    last_name: "",
    default_address: "",
    password: "",
    password_confirmation: ""
  }


  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.password === this.state.password_confirmation) {
      fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      })
      .then(r => {
        if (!r.ok) {
          alert('hey you did something wrong')
          throw r
        }
        return r.json()
      })
      .then(user => { // console.log(user) add logic here to make sure user gets re rendered to register page if invalid sign up
        this.props.history.push("/login")
      })
      .catch(console.error)
    } else {
      alert("Your passwords do not match.")
    }
  }

  render() {
    const { email, first_name, last_name, default_address, password, password_confirmation } = this.state
    return (
      <div className="form-container">
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Email:</label>
          <input type="text" placeholder="example@exp.com" name="email" onChange={this.handleInputChange} value={email} />
          <label>First Name:</label>
          <input type="text" placeholder="e.g. John" name="first_name" onChange={this.handleInputChange} value={first_name} />
          <label>Last Name:</label>
          <input type="text" placeholder="e.g. Doe" name="last_name" onChange={this.handleInputChange} value={last_name} />
          <label>Address:</label>
          <input type="text" placeholder="e.g. 81 Prospect St, Brooklyn, NY 11201" name="default_address" onChange={this.handleInputChange} value={default_address} />
          <label>Password:</label>
          <input type="password" placeholder="Must have 8 to 20 characters" name="password" onChange={this.handleInputChange} value={password} />
          <label> Confirm Password:</label>
          <input type="password" placeholder="Please don't use 'password'"name="password_confirmation" onChange={this.handleInputChange} value={password_confirmation} />
          <Button type='submit'>Submit</Button>
        </form>
      </div>
    )
  }
}

export default Register;
