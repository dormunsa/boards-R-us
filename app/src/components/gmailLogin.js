import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import HomePage from './homePage.js'


class Gmail extends Component {
   
    constructor(props) {
        super(props)
        this.CheckUser = this.CheckUser.bind(this)
        this.addUser = this.addUser.bind(this)
        this.state = { User: {} , redirect : false }
        document.getElementById("body-bg").style.backgroundColor = "black"

    }

    CheckUser(response){

        var self=this
        const userEmail = response.w3.U3;
        var userName = response.w3.ig
        const url = 'https://boards-r-us-mm.herokuapp.com/checkIfUserIsSigned'
        const prox = 'https://cors-anywhere.herokuapp.com/'
        const dev = 'http://localhost:3000/getUserByEmail/'
        fetch(`${dev}${userEmail}`)
        .then(response => {
           debugger
          if (response.ok) {
              debugger
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => {
            debugger
            if(data.length == 0) {
                self.addUser ( userName , userEmail )
            }
            else {
                this.setState(prevSate => ({
                    User: data[0],
                    redirect : true
                }))
            }
           
            console.log(data)
        })
        
    }

    addUser( name , email ){
        debugger
        var self=this
        var newUser = {
            "name" : "",
            "email" : ""
        }

        newUser.name = name;
        newUser.email = email;
        const url = 'https://boards-r-us-mm.herokuapp.com/checkIfUserIsSigned'
        const prox = 'https://cors-anywhere.herokuapp.com/'
        const dev = 'http://localhost:3000/addNewUser'
        fetch(`${dev}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify (newUser)
        }).then(res => res.json())
            
            .then(json => {
                debugger
                console.log(JSON.stringify(json));
                if(json.name != undefined){
                    this.setState(prevSate => ({
                        User: json,
                        redirect : true
                    }))
                    }
                
                else{
                    alert(`No update was made.`);
                }
        })
        .catch(err => console.log(err));


    }
   

    
    

    render() {
        var self=this
       const responseGoogle = (response) => {
            debugger
           console.log(response);
           self.CheckUser(response)
         }
         if(this.state.redirect){
            return (
                <HomePage  user = {self.state.User}>
                    </HomePage>
            )

         } else {
            return(
            <div className = "background">

             <h2 className = "card-title white top-space" style = {{marginBottom : "40px"}}>WELCOME TO</h2>
              <img className = "logo" src="assets/logo.png" />
              <h2 className = "card-title white" style = {{marginBottom : "40px"}}>SNOWBOARDS</h2>
                <GoogleLogin
                clientId="714828973797-3630gtl4t8bs231bdmj8ke3h9clu8ua3.apps.googleusercontent.com"
                render={renderProps => (
                <button className = "butt1" onClick={renderProps.onClick}> Login With Gmail</button>
                    )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                />
               

            </div>
            )
         }
        
    }
}

export default Gmail