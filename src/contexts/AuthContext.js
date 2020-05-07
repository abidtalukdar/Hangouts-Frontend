import React, { createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends React.Component{

    state = {
      user: ""
    }

    handleUpdateCurrentUser = (user) => {
      console.log(user)
      this.setState({
        user: user
      }, () => console.log(this.state))
    }

    render() {
        return(
          <AuthContext.Provider value={{...this.state, handleUpdateCurrentUser: this.handleUpdateCurrentUser}}>
          {this.props.children}
          </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider