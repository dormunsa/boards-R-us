import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';

class SnowBoard extends Component {

    constructor(props) {    
        debugger
        super(props)
        this.state = { User:props.user, board : props.board }
        this.markDisLike = this.markDisLike.bind(this)
        var current =  window.document.getElementsByClassName("slick-current")
    }

    markDisLike(event){ 
        event.preventDefault();
        debugger
        var self = this

        var reqBody = {
            "snowboardID":0,
            "userID": 0,
            "userGender": "",
            "ridingStyle": "",
            "dislikeList": [],
        }

        reqBody.snowboardID = self.state.board.id;
        reqBody.userGender = self.state.User.gender;
        reqBody.userID = self.state.User.id;
        reqBody.ridingStyle = self.state.User.ridingStyle;
        reqBody.dislikeList = self.state.User.dislikeList;
        reqBody = JSON.stringify(reqBody)
        const url = 'https://boards-r-us-mm.herokuapp.com/checkIfUserIsSigned'
        const prox = 'https://cors-anywhere.herokuapp.com/'
        const dev = 'http://localhost:3000/markDislikeSnowboard'

        fetch(`${dev}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: reqBody
        }).then(response => {
          debugger
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
            .then( data => {
               debugger
                console.log(JSON.stringify(data));
                if (data.name != undefined) {
                    debugger;
                    this.setState(prevSate => ({
                        User: data,
                        hasProfile: true,
                        boards: data.topPicks
                    }))
                }

                else {
                    alert(`No update was made.`);
                }
            })
            .catch(err => {
               
                console.log(err)
            });
    }

    render() {
        const self = this;
        return(
       <div>
            <div onClick = {self.markDisLike}  >
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
