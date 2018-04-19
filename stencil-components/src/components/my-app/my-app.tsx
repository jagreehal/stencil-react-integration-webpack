import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss',
  shadow: true
})
export class MyApp {
  @Prop() first: string;
  @Prop() last: string;

  @Prop() sayHello: Function;

  componentWillLoad() {
    console.log('The component is about to be rendered');
  }

  componentDidLoad() {
    console.log('The component has been rendered');
  }
  
  componentWillUpdate() {
    console.log('The component will update');
  }

  componentDidUpdate() {
    console.log('The component did update');
  }

  componentDidUnload() {
    console.log('The view has been removed from the DOM');
  }

  handleClick = () =>{
    if (this.sayHello !== undefined){
      this.sayHello(`Hello ${this.first} ${this.last}`);
    }
  }

  render() {
    if (this.first && this.last) {
      return (
        <div>
          <span class="welcome">Hello</span>, my name is {this.first}{' '}
          {this.last}
          <div>
            <button onClick={this.handleClick}>Say Hello</button>
          </div>
        </div>
      );
    }
  }
}
