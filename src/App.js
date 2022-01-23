import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component.jsx'
import { SearchBox } from './components/search-box/search-box.component.jsx'
class App extends Component {

  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') //returns a promise
    .then(response => response.json()) //converts the promise to a json object then passes it on
    .then(users => this.setState({ monsters: users })) //set the monsters array to the return list
  }

  //arrow functions automatically bind 'this' to where the arrow function was defined, aka App component constructor
  handleChange = (e) => {
    //this.setState is async, so if we wanna do something realtime, we need to use the second param
    this.setState({ searchField: e.target.value}, () => console.log(this.state));
  }

  render(){
    //same as const monsters = this.state.monsters;
    //saves the original values as constants
    const { monsters, searchField } = this.state;
    //filter returns an array based on the function passed
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return(
      <div className="App">
        <h1> Monster's Rolodex </h1>
        <SearchBox
          placeholder = 'search monsters'
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
