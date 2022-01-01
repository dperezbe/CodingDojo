import React, { Component } from 'react';

class Main extends Component {
    render() {
        const {children} = this.props; 
        return (
            <div className='App-main'>
                {children} 
            </div>
        );
    }
}

export default Main;