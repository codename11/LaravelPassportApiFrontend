import React, { Component } from 'react'

class Login extends Component {

    render() {
        return (
 
            <form onSubmit={this.props.login}>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" name="email" id="email" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" name="password" id="password" required/>
                </div>

                <input className="btn btn-outline-primary" type="submit" value="Submit" />
            </form>

        )
    }
}

export default Login;