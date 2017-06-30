import React from 'react';
import reactDOM from 'react-dom';

class InputNames extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      allNames: [],
      pairArr: [],
      mainArr: []
    };
  }

  handleChange(event) {
    const name = event.target.value;
    this.setState({
      name:name
    });
  };

  handleSubmit(event) {
    event.preventDefault();

    this.state.allNames.push(this.state.name);
    this.setState({
      allNames:this.state.allNames
    });
  };

  generatePairs(event) {
    for (var i = 0; i <= this.state.allNames.length; i++) {
      let pairArr = [];
      for (var j = 0; j < 2; j++) {
        pairArr.push(this.state.allNames[j]);
      }
      this.state.mainArr.push(pairArr);
      this.state.allNames.splice(0, 2);
    }
    this.setState({
      mainArr:this.state.mainArr
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Enter Name Here' value={this.state.name} onChange={this.handleChange.bind(this)}/>
          <button type="button" onClick={this.handleSubmit.bind(this)}>SUBMIT</button>
        </form>
        {this.state.allNames.map((person) => (
          <p>{person}</p>
        ))}
        <button type="button" onClick={this.generatePairs.bind(this)}>GENERATE PAIRS</button>
        <h2>Pairs Generated</h2>
        {this.state.mainArr.map((pairing) => (
          <ul>
          {pairing.map((coder) => (
            <li>{coder}</li>
          ))}
          </ul>
        ))}
      </div>
    );
  }








}

export default InputNames;
