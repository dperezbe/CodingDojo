import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({age: this.state.age + 1});
      }

    render() {
        const {firstName, lastName, age,hairColor} = this.props;



        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <h3>Age: {this.state.age}</h3>
                <h3>hair Color: {hairColor}</h3>
                <button type="button" onClick={e => this.handleSubmit(e)} >Birthday Button for {firstName} {lastName}</button>

            </div>
        );
    }
}

export default PersonCard;