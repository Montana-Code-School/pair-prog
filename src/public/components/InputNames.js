import React from 'react';
import reactDOM from 'react-dom';

const staticNames = [
  {personName:"April", pic:"img/april.jpeg"},
  {personName:"Brigitta", pic:"img/brigitta.jpeg"},
  {personName:"Chadwick", pic:"img/chadwick.jpeg"},
  {personName:"David", pic:"img/david.jpeg"},
  {personName:"Jennifer", pic:"img/jennifer.jpeg"},
  {personName:"Jesse", pic:"img/jesse.jpeg"},
  {personName:"John", pic:"img/john.png"},
  {personName:"Kashya", pic:"img/kashya.jpeg"},
  {personName:"Meredith", pic:"img/meredith.jpeg"},
  {personName:"Mike", pic:"img/mike.jpeg"},
  {personName:"Nani", pic:"img/nani.png"} ];

class InputNames extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      allNames: [
        {personName:"April", pic:"img/april.jpeg"},
        {personName:"Brigitta", pic:"img/brigitta.jpeg"},
        {personName:"Chadwick", pic:"img/chadwick.jpeg"},
        {personName:"David", pic:"img/david.jpeg"},
        {personName:"Jennifer", pic:"img/jennifer.jpeg"},
        {personName:"Jesse", pic:"img/jesse.jpeg"},
        {personName:"John", pic:"img/john.png"},
        {personName:"Kashya", pic:"img/kashya.jpeg"},
        {personName:"Meredith", pic:"img/meredith.jpeg"},
        {personName:"Mike", pic:"img/mike.jpeg"},
        {personName:"Nani", pic:"img/nani.png"} ],
      pairArr: [],
      mainArr: []
    };
  }

  // handleChange(event) {
  //   const name = event.target.value;
  //   this.setState({
  //     name:name
  //   });
  // };

  // handleSubmit(event) {
  //   event.preventDefault();
  //
  //   this.state.allNames.push(this.state.name);
  //   this.setState({
  //     allNames:this.state.allNames
  //   });
  // };



  generatePairs(event) {
    for (var i = 0; i <= this.state.allNames.length; i++) {
      let pairArr = [];
      for (var j = 0; j < 2; j++) {
        let randNum = Math.floor((Math.random() * this.state.allNames.length) + 0);
        pairArr.push(this.state.allNames[randNum]);
        this.state.allNames.splice(randNum, 1);
      }
      this.state.mainArr.push(pairArr);
    }
    this.state.mainArr.push(this.state.allNames);
    this.setState({
      mainArr:this.state.mainArr
    });
  }

  render() {
    return (
      <div>
        {staticNames.map((person) => (
          <img className="initialImage" src={person.pic} />
        ))}
        <button type="button" onClick={this.generatePairs.bind(this)}>GENERATE PAIRS</button>
        <h2>Pairs Generated</h2>
        {this.state.mainArr.map((pairing) => (
          <ul>
          {pairing.map((coder, i) => (
            <li key={coder.personName}><img className="pairedImg" src={[coder.pic]} /><p>{[coder.personName]}</p></li>
          ))}
          </ul>
        ))}
      </div>
    );
  }








}

export default InputNames;
