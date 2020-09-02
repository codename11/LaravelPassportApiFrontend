import React, { Component } from 'react'

class ShowPost extends Component {

    render() {

        let options = this.props.posts.map((item, i) => {

            return <option key={item.id} value={item.id}>{item.title}</option>

        });

        let post = this.props.post ? <div className="card">
            <div className="card-header">{this.props.post.title}</div>
            <div className="card-body">{this.props.post.body}</div>
            <div className="card-footer">{this.props.post.id}</div>
        </div> : null;

        return (
            <div className="container">

                <select onChange={this.props.onChange} name="posts" className="custom-select mb-3">
                    {options}
                </select>

                {post}

            </div>
            
        )
    }
}

export default ShowPost;
