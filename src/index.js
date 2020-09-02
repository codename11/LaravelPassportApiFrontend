import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import Login from "./components/login";
import Register from "./components/register";
import CreatePost from "./components/createPost";
import ShowPost from "./components/showPost";
import ListPosts from "./components/listPosts";
import UpdatePost from "./components/updatePost";
import DeletePost from "./components/deletePost";

class App extends Component{

  constructor() {
    super();
    this.state = {
      menu: ["register", "login", "create", "show", "update", "delete", "list"],
      filteredMenu: [],
      elemIndex: 0,
      access_token: null,
      posts: null,
      showPost: null,
      updatePost: null,
      deletePost: null,
      postUpdated: null,
      postDeleted: null,
    };
    this.setActive = this.setActive.bind(this);
    this.onChange = this.onChange.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.createPost = this.createPost.bind(this);
    this.listPosts = this.listPosts.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.filterize = this.filterize.bind(this);
    this.onClick = this.onClick.bind(this);
    console.clear();

  }

  async onClick(e){

    let liId = e.target.parentElement.id
    let loc1 = liId.indexOf("li");
    let tab = liId.substr(0,loc1);

    let select = document.getElementById("sel"+tab);
    
    if(select){
      
      let postId = select.value;
      let selId = select.id;
      this.onChange(postId,selId);
    }

  }

  async deletePost(e){

    e.preventDefault();

    let forma = e.target;
    let formElements = {};
    let postId = forma.elements[0].value;

    console.log(formElements);

    let url = "http://LaravelPassportApi.test/api/post/" + postId;

    await fetch(url, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      crossDomain : true,
			headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
        "Authorization": "Bearer " + this.state.access_token
			}
		 })
		.then((response) => {

      return response.json();

    })// parses JSON response into native JavaScript objects
		.then((data) => {

      console.log(data);
      this.listPosts();
      
    })
		.catch((error) => {
			  console.error('Error:', error);
		});

  }

  async updatePost(e){

    e.preventDefault();

    let forma = e.target;
    let formElements = {};
    let postId = forma.elements[0].value;
    formElements.title = forma.elements[1].value;
    formElements.body = forma.elements[2].value;

    let url = "http://LaravelPassportApi.test/api/post/"+postId;

    await fetch(url, {
      method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
      crossDomain : true,
			headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
        "Authorization": "Bearer " + this.state.access_token
			},
			body: JSON.stringify(formElements) // body data type must match "Content-Type" header
		 })
		.then((response) => {

      return response.json();

    })// parses JSON response into native JavaScript objects
		.then((data) => {

      console.log(data);
      this.listPosts();
      
    })
		.catch((error) => {
			  console.error('Error:', error);
		});

  }

  async onChange(par1, par2){

    let postId = null;
    let selId = null;
    if(par1.target){
      postId = par1.target.value;
      selId = par1.target.id;
    }
    else{

      postId = par1;
      selId = par2;

    }
    
    let url = "http://LaravelPassportApi.test/api/post/" + postId;

    await fetch(url, {
          headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + this.state.access_token
          }
        }
      )
			.then((response) => response.json())
			.then((data) => {

        if(selId==="selshow"){

          this.setState({
            showPost: data.post
          });

        }

        if(selId==="selupdate"){
          
          this.setState({
            updatePost: data.post
          });

        }

        if(selId==="seldelete"){

          this.setState({
            deletePost: data.post
          });

        }

      })
			.catch((error) => {
			  console.error('Error:', error);
		});

  }

  async listPosts(){

    //console.log(formElements);

    let url = "http://LaravelPassportApi.test/api/post";

    await fetch(url, {
          headers: {
            'Accept': 'application/json',
            "Authorization": "Bearer " + this.state.access_token
          }
        }
      )
			.then((response) => response.json())
			.then((data) => {

        //console.log(data);
        this.setState({
          posts: data.posts
        });

      })
			.catch((error) => {
			  console.error('Error:', error);
		});

  }

  async createPost(e){

    e.preventDefault();

    let forma = e.target;
    let formElements = {};
    formElements.title = forma.elements[0].value;
    formElements.body = forma.elements[1].value;

    console.log(formElements);

    let url = "http://LaravelPassportApi.test/api/post";

    await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      crossDomain : true,
			headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json',
        "Authorization": "Bearer " + this.state.access_token
			},
			body: JSON.stringify(formElements) // body data type must match "Content-Type" header
		 })
		.then((response) => {

      return response.json();

    })// parses JSON response into native JavaScript objects
		.then((data) => {

      console.log(data);
      this.listPosts();

    })
		.catch((error) => {
			  console.error('Error:', error);
		});

  }

  async login(e){

    e.preventDefault();

    let forma = e.target;
    let formElements = {};
    formElements.email = forma.elements[0].value;
    formElements.password = forma.elements[1].value;

    //console.log(formElements);

    let url = "http://LaravelPassportApi.test/api/login";

    await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      crossDomain : true,
			headers: {
        'Content-Type': 'application/json',
			},
			body: JSON.stringify(formElements) // body data type must match "Content-Type" header
		 })
		.then((response) => {

      return response.json();

    })// parses JSON response into native JavaScript objects
		.then((data) => {

      this.setState(data);
      //console.log(data);
      this.listPosts();
      this.filterize();

    })
		.catch((error) => {
			  console.error('Error:', error);
		});

  }

  async register(e){

    e.preventDefault();

    let forma = e.target;
    let formElements = {};
    formElements.name = forma.elements[0].value;
    formElements.email = forma.elements[1].value;
    formElements.password = forma.elements[2].value;
    formElements.password_confirmation = forma.elements[3].value;

    let url = "http://LaravelPassportApi.test/api/register";

    await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      crossDomain : true,
			headers: {
        'Content-Type': 'application/json',
			},
			body: JSON.stringify(formElements) // body data type must match "Content-Type" header
		 })
		.then((response) => {

      return response.json();

    })// parses JSON response into native JavaScript objects
		.then((data) => {

      console.log(data);
      
    })
		.catch((error) => {
			  console.error('Error:', error);
		});

  }

  setActive(e){

    e.preventDefault();
    let elem = e.target;

    let len1 = elem.attributes.length;
    let obj1 = {};
    let name = null;
    let value = null;
    for(let i=0;i<len1;i++){

      let attr = elem.attributes[i];

      name = attr.name;
      value = attr.value;
      
      obj1[name] = value;
      
    }

    let allTabs = document.querySelectorAll(".nav-link");
    let len2 = allTabs.length;
    for(let i=0;i<len2;i++){

      if(allTabs[i]===elem){

        this.setState({
          elemIndex: i
        });
        
      }
      
    }
    
    this.setState(obj1);

  }

  filterize(){
    
    let menu = this.state.menu.filter((item, i) => {
      
      let access_token = this.state.access_token;
      if(access_token===null && item==="register"){
        
        return item;

      }

      if(access_token===null && item==="login"){
        
        return item;

      }

      if(access_token!==null && item==="create"){
        
        return item;

      }

      if(access_token!==null && item==="show"){
        
        return item;

      }

      if(access_token!==null && item==="update"){
        
        return item;

      }

      if(access_token!==null && item==="delete"){
        
        return item;

      }

      if(access_token!==null && item==="list"){
        
        return item;

      }
      
    });

    this.setState({
      filteredMenu: [...menu],
      elemIndex: 0
    });
    
  }

  componentDidMount(){
    this.filterize();
  }
  
  render() {
    //console.log();
    
    let elemIndex = this.state.elemIndex;
    let active =  null;
    
    let lis = this.state.filteredMenu ? this.state.filteredMenu.map((item, i) => {
      
      active = elemIndex===i || (i===0 && elemIndex===0) ? " active" : "";
      
      return <li className="nav-item" key={i} id={item+"li"} onClick={this.onClick}>
        <a className={"nav-link" + active} data-toggle="tab" href={"menu"+(i+1)} onClick={this.setActive}>
          {item}
        </a>
      </li>;

    }) : this.state.menu.map((item, i) => {
      
      active = elemIndex===i || (i===0 && elemIndex===0) ? " active" : "";
      
      return <li className="nav-item" key={i} id={item+"li"}>
        <a className={"nav-link" + active} data-toggle="tab" href={"menu"+(i+1)} onClick={this.setActive}>
          {item}
        </a>
      </li>;

    });

    let tabContents = this.state.filteredMenu ? this.state.filteredMenu.map((item, i) => {
      
      active = elemIndex===i || (i===0 && elemIndex===0) ? " active" : "";

      return <div id={item+"tab"} key={i} className={"container tab-pane" + active}><br/>
        
        {item==="register" ? <Register register={this.register}/> : null}

        {item==="login" ? <Login login={this.login}/> : null}

        {this.state.access_token!==null && item==="create" ? <CreatePost createPost={this.createPost}/> : null}

        {this.state.access_token!==null && item==="show" && this.state.posts!==null ? <ShowPost onChange={this.onChange} posts={this.state.posts} postShow={this.state.showPost}/> : null}

        {this.state.access_token!==null && item==="list" && this.state.posts!==null ? <ListPosts posts={this.state.posts}/> : null}

        {this.state.access_token!==null && item==="update" && this.state.posts!==null ? <UpdatePost onChange={this.onChange} updatePost={this.updatePost} posts={this.state.posts} postUpdate={this.state.updatePost}/> : null}

        {this.state.access_token!==null && item==="delete" && this.state.posts!==null ? <DeletePost onChange={this.onChange} deletePost={this.deletePost} posts={this.state.posts} postDelete={this.state.deletePost}/> : null}

      </div>;

    }) : this.state.menu.map((item, i) => {
      
      active = elemIndex===i || (i===0 && elemIndex===0) ? " active" : "";

      return <div id={item+"tab"} key={i} className={"container tab-pane" + active}><br/>
        
        {item==="register" ? <Register register={this.register}/> : null}

        {item==="login" ? <Login login={this.login}/> : null}

        {this.state.access_token!==null && item==="create" ? <CreatePost createPost={this.createPost}/> : null}

        {this.state.access_token!==null && item==="show" && this.state.posts!==null ? <ShowPost onChange={this.onChange} posts={this.state.posts} postShow={this.state.showPost}/> : null}

        {this.state.access_token!==null && item==="list" && this.state.posts!==null ? <ListPosts posts={this.state.posts}/> : null}

        {this.state.access_token!==null && item==="update" && this.state.posts!==null ? <UpdatePost onChange={this.onChange} updatePost={this.updatePost} posts={this.state.posts} postUpdate={this.state.updatePost}/> : null}

        {this.state.access_token!==null && item==="delete" && this.state.posts!==null ? <DeletePost onChange={this.onChange} deletePost={this.deletePost} posts={this.state.posts} postDelete={this.state.deletePost}/> : null}

      </div>;

    });

    return (
      
      <div className="container cent">

        <ul className="nav nav-tabs" role="tablist">
          {lis}
        </ul>

        <div className="tab-content">
          {tabContents}
        </div>

      </div>
      
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
