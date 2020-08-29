import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

class App extends Component{

  constructor() {
    super();
    this.state = {
      menu: ["", "", "", "", "", "", ""],
      elemIndex: null
    };
    this.setActive = this.setActive.bind(this);
    console.clear();
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

    let allActive1 = document.querySelectorAll(".nav-link");
    let len2 = allActive1.length;
    for(let i=0;i<len2;i++){

      if(allActive1[i]===elem){

        this.setState({
          elemIndex: i
        });
      }
      
    }
    
    this.setState(obj1);

  }

  render() {
    //console.log();
    let active =  null;

    let lis = this.state.menu.map((item, i) => {

      active = (this.state.elemIndex === i || (this.state.elemIndex===null && i===0) ? " active" : "");

      return <li className="nav-item" key={i}>
        <a className={"nav-link" + active} data-toggle="tab" href={"menu"+(i+1)} onClick={this.setActive}>
          {"Menu"+(i+1)}
        </a>
      </li>

    });

    let tabContents = this.state.menu.map((item, i) => {

      active = (this.state.elemIndex === i || (this.state.elemIndex===null && i===0) ? " active" : "");
      
      return <div id={"menu"+(i+1)} key={i} className={"container tab-pane" + active}><br/>
        <h3>{"Menu"+(i+1)}</h3>
        <p>{"Menu"+(i+1)}Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

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
