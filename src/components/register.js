import React, { Component } from 'react'

class Register extends Component {

    render() {
        return (
 
            <form onSubmit={this.props.register}>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" className="form-control" name="name" id="name" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" name="email" id="email2" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" name="password" id="password2" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" name="password_confirmation" id="password_confirmation" required/>
                </div>

                <input className="btn btn-outline-primary" type="submit" value="Submit" />
            </form>

        )
    }
}

export default Register;