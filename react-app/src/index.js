import React from 'react';
import ReactDOM from 'react-dom';
import 'stencil-components/dist/stencil-app';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      first: 'Peter',
      last: 'Parker',
      sayHelloCount: 0
    }
    this.setCustomElement = element => {
      this.customElement = element;
    };    

    this.customElementReady = this.customElementReady.bind(this);
  }

  customElementReady(){    
    this.customElement.sayHello = (e) => {
      this.setState({
        sayHelloCount: this.state.sayHelloCount+ 1
      })
    } 
  }

  componentDidMount(){
    this.customElement.componentOnReady(this.customElementReady);  
  }

  handleChange = (e) => {
    let {name, value} = e.target;
    console.log(name, value)
    this.setState({
      [name]: value
    });

    this.setState({
      sayHelloCount: this.state.sayHelloCount + 1
    })
  }

  render(){
    return (
      <div> 
        <p>
          <label>First </label>
          <input type="text" onChange={this.handleChange} name="first" value={this.state.first}/>
        </p>
        <p>
          <label>Last </label>
          <input type="text" onChange={this.handleChange} name="last" value={this.state.last}/>
        </p>
        <p>sayHelloCount: {this.state.sayHelloCount}</p>
        <hr/>
        <my-app first={this.state.first} last={this.state.last} ref={this.setCustomElement}></my-app></div>
    )
  }
}

ReactDOM.render(
  <div><App/></div>,
  document.getElementById('app')
);

if (process.env.NODE_ENV !== 'production'){
  module.hot.accept();
}