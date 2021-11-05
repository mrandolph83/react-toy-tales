import React from 'react';
import './App.css';
// import './db.json' from ./db.json 
import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{
state = {
  display: false
  toys: []
}

componentDidMount() {
  fetch("http://localhost:3000/toys")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      this.setState({
        toys: data.toys,
      });
    });
}
}

  // 1 - ComponentDidMount and fetch call to toys. 
  // 2 - Data/props flow for toys
  // 3 - add a create function for toys
  // 4 - add a delete function for toys
  // 5 - undersand json-server


  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer/>
      </>
    );
  }

}

export default App;
