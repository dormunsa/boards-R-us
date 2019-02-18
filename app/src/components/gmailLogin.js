import React, { Component } from 'react'
import Header from './header'
import Section1 from './section1.js'
import SnowBoardList from './snowBoardList.js'
import AboutUs from './aboutUs.js'
import GifsList from './GifsList.js'
import Footer from './footer.js'

import Modal from 'react-responsive-modal';
import HomePage from './homePage.js';
import GoogleLogin from 'react-google-login';

class Gmail extends Component {

    constructor(props) {
        debugger
        super(props)
        this.CheckUser = this.CheckUser.bind(this)
        this.addUser = this.addUser.bind(this)
        this.state = { User: {} , isLogin : false , open: true }
        document.getElementById("body-bg").style.backgroundColor = "white"
      

    
    }
    onOpenModal = () => {

        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

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
                    isLogin : true
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
                        isLogin : true
                    }))
                    }
                
                else{
                    alert(`No update was made.`);
                }
        })
        .catch(err => console.log(err));


    }
   

    active = {
        color: "#4248FF",
        fontWeight: "bold",
        textDecoration: "none",
    }
    NotActive = {
        color: "white",
        fontWeight: "regular",
        textDecoration: "none",
    }
    header = {
        backgroundColor: "#000000",
        marginBottom: '20px'
    }
    logo = {
        width: "50px",
        height : "50px",
        fontWeight : "bold"
    }
   
    render() {

        
        const responseGoogle = (response) => {
            console.log(response);
            self.CheckUser(response)
        }
        var self=this
        if(self.state.isLogin == true){
            return(
                <div>
                  
                    <HomePage user = {self.state.User} >
                    </HomePage>
                   
                </div>
         )
        } else { 
            const { open } = this.state;
            const { closeOnEsc } = false
            return (
            <div>
                <Header >
                </Header>
                <Section1 >
                </Section1>
                <SnowBoardList>
                </SnowBoardList>
                <Modal closeOnEsc = {closeOnEsc} open={open}  center>
                   <div className = "container">
                        <div className = "row">
                            <h2> 
                                Welcome To Boards R US Please Login With Gmail
                            </h2>
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
                    </div>
                </Modal>
                <AboutUs>
                </AboutUs>
                <GifsList>
                </GifsList>
                <Footer>
                </Footer>
            </div>
        )
            
            
        }
        
    }
}

export default Gmail