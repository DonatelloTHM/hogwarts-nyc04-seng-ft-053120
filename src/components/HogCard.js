import React, { Component } from 'react'

const img = require('../hog-imgs/cherub.jpg')

export default class HogCard extends Component {

    state = {
        isClicked: false
    }

    handleClickedState = () => {
        this.setState(prevState => {
           return {isClicked: !prevState.isClicked}
        })
        
    }
    
    
getIgetImage = () => {
       const fileName = this.props.hogName.toLowerCase().replace(/ /g, '_') + '.jpg';
       const img = require(`../hog-imgs/${fileName}`);
       return img;
    }

    render() {
        return (
          <div onClick={this.handleClickedState} className="ui card">
            <div className="image">
              <img src={this.getIgetImage()} alt={this.props.hogName} />
            </div>
            <div className="content">
              <a className="header">{this.props.hogName}</a>
            </div>
            { this.state.isClicked ? 
              <div className="extra content">
              <div className="description">
                <p>Specialty: {this.props.hogSpecialty}</p>
                <p>{this.props.hogGreased ? 'Greased' : 'Not Greased'}</p>
                <p>Weight: {this.props.hogWeight}</p>
                <p>Medal: {this.props.hogMedal}</p>
              </div>
              </div> : ""
            }
          </div>
        )
    }
}
