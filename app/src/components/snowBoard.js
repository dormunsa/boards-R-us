import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class SnowBoard extends Component {

    constructor(props) {    
        debugger
        super(props)
        this.state = { User:props.user, board : props.board , isMarked:false }
        // this.markDisLike = this.markDisLike.bind(this)
      
    }

    componentWillMount(){
        debugger
        var self = this;
        self.setState({
            board: this.props.board
        })
    }
  
    render() {
        const self = this;
        var handleToUpdate  =   this.props.markDisLike;
            return(
                <div>
                     <div onClick = { () => handleToUpdate(self.state.board.id)}  >
                     <i className = "far fa-times-circle center-x"></i>
                     </div>
                   
                  <div className="event">
                         {this.props.children}
                  </div>
                  </div>
               
                 )
    }

}

export default SnowBoard;
