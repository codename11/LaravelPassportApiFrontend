import React, { Component } from 'react'

class CreatePost extends Component {

    render() {
        return (
 
            <form onSubmit={this.props.createPost}>

                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="form-control" name="title" id="title" required/>
                </div>

                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea className="form-control" rows="5" name="body" id="body" required></textarea>
                </div>

                <input className="btn btn-outline-primary" type="submit" value="Submit" />
            </form>

        )
    }
}

export default CreatePost;