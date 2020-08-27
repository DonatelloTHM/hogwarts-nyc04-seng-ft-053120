import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from './HogsContainer'
import Filter from './Filter'

class App extends Component {
  state = {
    isGreased: false,
    sortVal: 'none',
    isHidden: false,
  }

  changeSortVal = (newVal) => {
    this.setState({ sortVal: newVal })
  }

  toggleIsGreased = () => {
    this.setState(prevState => {
      return { isGreased: !prevState.isGreased }
    })
  }

  toggleIsHidden = () => {
    this.setState(prevState => {
      return { isHidden: !prevState.isHidden }
    })
  }

  filterHogs = () => {
    if (this.state.isGreased) {
      return hogs.filter(hog => hog.greased === this.state.isGreased);
    }
    return [...hogs];
  }

  sortHogs = (hogsInput) => {
    switch (this.state.sortVal) {
      case 'name':
        return hogsInput.sort((hog1, hog2) => hog1.name > hog2.name ? 1 : -1);
      case 'weight':
        return hogsInput.sort((hog1, hog2) => hog1.weight < hog2.weight ? 1 : -1);
      default:
        return hogsInput;
    }
  }

  render() {
    let hogsProp = this.filterHogs();
    hogsProp = this.sortHogs(hogsProp);

    hogsProp = this.state.isHidden ? [] : hogsProp;

    return (
      <div className="App ui grid container centered">
        <Nav />
        <Filter 
          isGreased={this.state.isGreased}
          toggleIsGreased={this.toggleIsGreased}
          changeSortVal={this.changeSortVal} 
          isHidden={this.state.isHidden}
          toggleIsHidden={this.toggleIsHidden}/>
        <HogsContainer hogs={hogsProp}/>
      </div>
    );
  }
}

export default App;
