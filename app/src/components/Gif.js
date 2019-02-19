import React, { Component } from 'react';

class Gif extends Component {

    constructor(props) {   
         
        super(props)
        this.state = { User : {}, gif : props.gif , userid: props.gif.userId } 
        this.getUserByid = this.getUserByid.bind(this)
    }
    componentWillReceiveProps(nextProps) {
       
        this.setState({ gif: nextProps.gif , userid: nextProps.gif.userId });  
      }

    componentWillMount() {
        
         var self = this
         const url = 'https://boards-r-us-mm.herokuapp.com/checkIfUserIsSigned'
         const prox = 'https://cors-anywhere.herokuapp.com/'
         const dev = 'http://localhost:3000/getUserID/'
         // ${this.state.User.id}
        self.getUserByid()
    }

    getUserByid(){
       
        var self = this
        const url = 'https://boards-r-us-mm.herokuapp.com/getUserID/'
        // ${this.state.User.id}
      
            fetch(`${url}${this.state.userid}`)
            .then(response => {
               
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then( data => {
              
                this.setState(prevSate => ({
                    User: data[0]
                }))
                console.log(this.state.User)
            })

        }

    
    render() {
        const self = this;
        return(
            <div>
            <div>
                {this.props.children}
            </div>
            <h6 className= "center">Added By {self.state.User.name} </h6>
            </div>

            
        )
    }

}

export default Gif;
