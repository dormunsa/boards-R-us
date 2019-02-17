import React, { Component } from 'react';

class Gif extends Component {

    constructor(props) {    
        super(props)
        this.state = { gif : props.gif } 
    }

    render() {
        const self = this;
        return(
            <div>
                {this.props.children}
            </div>
        )
    }

}

export default Gif;
