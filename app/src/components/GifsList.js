import React, { Component } from 'react'
import Gif from './Gif'
import { MdSearch, MdSave } from 'react-icons/md';
import Modal from 'react-responsive-modal';
// 

class GifsList extends Component {

    constructor(props) {
       
      debugger
            super(props)
            if (props.user) {
                this.state = { Gifs: [] , open: false , User:props.user, date: "" , fileSource : ""}
            } else {
                this.state = { Gifs: [] , open: false }
            }
    
        this.eachEvent = this.eachEvent.bind(this)
        this.add = this.add.bind(this)
        this.addGif = this.addGif.bind(this)
        this.getDateFromUser = this.getDateFromUser.bind(this)
        this.getSourceFromUser = this.getSourceFromUser.bind(this)
      
    
    }
    componentWillMount() {
       
        var self=this
        const url = 'https://boards-r-us-mm.herokuapp.com/checkIfUserIsSigned'
        const prox = 'https://cors-anywhere.herokuapp.com/'
        const dev = 'http://localhost:3000/getTopGIFs'
        fetch(`${dev}`)
        .then(response => {
           
          if (response.ok) {
             
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => data.map(item => {
           
            self.add(item.fileSource , item.id , item.userID );
        }))
        
    }
    
            logo = {
                width: "100%",
                height : "100%",
                fontWeight : "bold",
             
            }
           

    add( source , id , userId) {
        this.setState(prevSate => ({
            Gifs: [ 
                ...prevSate.Gifs,
                {
                    source: source,
                    id: id,
                    userId: userId
                }
            ]
        }))
        
    }
    getSourceFromUser(event) {
        
        console.log(this.state)
        this.setState({
            fileSource: event.target.value
        })
    }
    getDateFromUser(event) {
      
        console.log(this.state)
        this.setState({
            date: event.target.value
        })
    }
    onOpenModal = () => {

        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

  
    addGif(e){
        debugger
        e.preventDefault();  
        var self = this
        var newGif = {
            "userID": "",
            "date": 0,
            "fileSource": "",
        }
        newGif.userID = self.state.User.id;
        newGif.date = self.state.date;
        newGif.fileSource = self.state.fileSource;
        newGif = JSON.stringify(newGif)
        const url = 'https://boards-r-us-mm.herokuapp.com/checkIfUserIsSigned'
        const prox = 'https://cors-anywhere.herokuapp.com/'
        const dev = 'http://localhost:3000/addNewGIF'
        fetch(`${dev}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: newGif
        }).then(response => {
          
            if (response.ok) {
                this.setState({ open: false });
                return response.json();
            } else {
                throw new Error('Something went wrong ...');
            }
        })
            .catch(err => {
               
                console.log(err)
            });
    }

    eachEvent(item, i) {
        return(
            <div className = "col-12 col-lg-4 card card-body gifBox"  key = {`container${i}`}>
                <Gif key={`event${i}`} gif={item}>
                    <img style={this.logo} src = {item.source} />
                </Gif>
            </div>
        )
    }

    render() {    
        const { open } = this.state;
        var self = this;
        return( 
            <div className="eventList">
                <h2 className="card-title featuresTitle">GIF FEATURES</h2>   

                <div className = "container">
                    <div className = "row">
                        {this.state.Gifs.map(this.eachEvent)}
                    </div>
                </div> 
                <h5 className = "center top">Think you got what it takes to be part of our best riders? Upload your own GIF now and maybe you'll get there!</h5> 
                <a onClick={this.onOpenModal} style={{ top: "10px" , color : "#fff" }} className="myButton">Add GIF</a>
                 <Modal open={open} onClose={this.onCloseModal} center>
                                        <div className="container">
                                            <div className="searchForm">
                                                <form onSubmit={self.addGif}>
                                                    <h6>Please Fill The Following Fields:</h6>
                                                    <div className="container">
    
                                                        <div className="row top-space first">
                                                            <label className="SearchLabel col-6">
                                                                Date:
                                                            </label>
                                                            <input placeholder = "YYYY-MM-DD" className="SearchLabel col-6" required type="text" name="Address" onChange = {self.getDateFromUser}/>
    
                                                        </div>
    
                                                        <div className="row top-space">
                                                            <label className="SearchLabel col-6">
                                                                File Source:
                                                            </label>
                                                            <input className="SearchLabel col-6" required type="text" name="Weight" onChange = {self.getSourceFromUser} />
    
                                                        </div>
    
                                                        <br />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary card-button right"><MdSave /></button>
                                                </form>
                                            </div>
                                        </div>
                                    </Modal>
            </div>


        )
    }

}


export default GifsList
