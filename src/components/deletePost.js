import React, { Component } from 'react'

class DeletePost extends Component {

    render() {

        let options = this.props.posts.map((item, i) => {

            return <option key={item.id} value={item.id}>{item.title}</option>

        });

        let deletePost = this.props.postDelete ? <form onSubmit={this.props.deletePost}>

            <input type="hidden" name="postId" value={this.props.postDelete.id}/>

            <input className="btn btn-outline-primary" type="submit" value="Submit" />

        </form> : null;

        return (
            <div className="container">

                <select id={"seldelete"} onChange={this.props.onChange} name="posts" className="custom-select mb-3">
                    {options}
                </select>

                {deletePost}

            </div>
            
        )
    }
}

export default DeletePost;
