import React, { Component } from 'react';

class SnowBoard extends Component {

    constructor(props) {    
        super(props)
        this.state = { board : props.board }
        this.markDisLike = this.markDisLike.bind(this)
    }

    markDisLike(event){ 
        console.log (this.state.board)
    }

    render() {
        const self = this;
        return(
            <div onClick = {self.markDisLike}  className="event">
                {this.props.children}
            </div>
        )
    }

}

export default SnowBoard;
