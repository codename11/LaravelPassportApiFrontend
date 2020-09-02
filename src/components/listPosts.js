import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';

class ListPosts extends Component {

    constructor() {
        super();

        this.state = {
            
        };
        this.handleSelect = this.handleSelect.bind(this);

    }

    handleSelect(e){

        

    }
    
    render() {

        let posts = this.props.posts.map((item, i) => {

            return <div className="card cardWide" key={i}>
                <div className="card-header text-center">{item.title}</div>
                <div className="card-body">{item.body}</div>
                <div className="card-footer">{"No. "+item.id}</div>
            </div>;

        });
        return (
            <Carousel>
                
                {posts}

            </Carousel>
          );
    }
}

export default ListPosts;
