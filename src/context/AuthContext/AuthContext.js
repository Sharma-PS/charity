import React, { Component, createContext } from 'react';

export const AuthContext = createContext();

class AuthContextProvider extends Component {
    state = {
        isAutheticated : false
    }

    toggleAuth = () => {
        this.setState({isAutheticated : !(this.state.isAutheticated)})
    }
    render() { 
        return (
            <AuthContext.Provider value={{...this.state, toggleAuth: this.toggleAuth}}>
                {this.props.children}
            </AuthContext.Provider>
        );
    }
}
 

export default AuthContextProvider;