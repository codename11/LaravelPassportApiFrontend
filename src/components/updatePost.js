import React, { Component } from 'react'

class UpdatePost extends Component {

    render() {

        let options = this.props.posts.map((item, i) => {

            return <option key={item.id} value={item.id}>{item.title}</option>

        });

        let updatePost = this.props.post ? <form onSubmit={this.props.updatePost}>

            <input type="hidden" name="postId" value={this.props.post.id}/>

            <div className="form-group">
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control" name="title" id="title" defaultValue={this.props.post.title} required/>
            </div>

            <div className="form-group">
                <label htmlFor="body">Body:</label>
                <textarea className="form-control" rows="5" name="body" id="body" defaultValue={this.props.post.body} required></textarea>
            </div>

            <input className="btn btn-outline-primary" type="submit" value="Submit" />

        </form> : null;

        return (
            <div className="container">

                <select onChange={this.props.onChange} name="posts" className="custom-select mb-3">
                    {options}
                </select>

                {updatePost}

            </div>
            
        )
    }
}

export default UpdatePost;
