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
      mainArr: [],
      bkgdArr: []
    };
  }

  componentDidMount() {
    this.repeatingBkgd();
  }

  grabList() {
    console.log("grabbing");
    this.setState({
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
        {personName:"Nani", pic:"img/nani.png"} ]
    })
  }

  repeatingBkgd() {
    for (var i = 0; i < 50; i++) {
      let randNum = Math.floor((Math.random() * this.state.allNames.length) + 0);
      this.state.bkgdArr.push(staticNames[randNum].pic);
    }
    this.setState({
      bkgdArr:this.state.bkgdArr
    })
  }

  generatePairs(event) {
    this.grabList();
    this.state.mainArr = [];

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
      mainArr:this.state.mainArr,
    });
  }

  render() {
    return (
      <div className="generatorPageContainer">

        <div className="backgroundGrid">
          {this.state.bkgdArr.map((person) => (
            <img className="grayImg" src={person} />
          ))}
        </div>

        <div className="generator">
          <div className="fullWidthContainer text-center">
            <button type="button" className="btn btn-primary" onClick={this.generatePairs.bind(this)}><h1>GENERATE PAIRS</h1></button>
          </div>
          <div className="fullWidthContainer text-center">
            <p><em>Please Click The Button To Generate Teams</em></p>
          </div>
          <div className="returnedPairs">
          {this.state.mainArr.map((pairing) => (
            <ul>
            {pairing.map((coder, i) => (
              <li key={coder.personName}><img className="pairedImg" src={[coder.pic]} /><p>{[coder.personName]}</p></li>
            ))}
            </ul>
          ))}
          </div>
        </div>

      </div>
    );
  }

  // {staticNames.map((person) => (
  //   <img className="initialImage" src={person.pic} />
  // ))}






}

export default InputNames;
