import React from 'react';
import ReactDOM from 'react-dom';
import InputNames from './InputNames';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


render() {
  return (
    <div>
      <InputNames />
    </div>
    );
  }
}

ReactDOM.render(<App urlend="planets"/>, document.getElementById("container"));
