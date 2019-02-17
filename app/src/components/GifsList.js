import React, { Component } from 'react'
import Gif from './Gif'
// 

class GifsList extends Component {

    constructor(props) {
        super(props)
        this.state = { Gifs: [] }
      
        
        this.eachEvent = this.eachEvent.bind(this)
        this.add = this.add.bind(this)
      
    
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
           
            self.add(item.fileSource , item.id );
        }))
        
    }
   


            // .then(response => {
            //   if (response.ok) {
            //     return response.json();
            //   } else {
            //     throw new Error('Something went wrong ...');
            //   }
            // })
            // .then(data => data.map(item => {
                
            //     self.add({name: item.name, country: item.country, competition: item.style.competition , participants: item.style.participants  });
            // }))
            
        
       

       
    
            logo = {
                width: "100%",
                height : "100%",
                fontWeight : "bold",
             
            }
           

    add( source , id) {
        this.setState(prevSate => ({
            Gifs: [ 
                ...prevSate.Gifs,
                {
                    source: source,
                    id: id
                }
            ]
        }))
        
    }

  
    eachEvent(item, i) {
      
     console.log(item)
        return(
            <div className = "col-12 col-lg-4 card card-body gifBox"  key = {`container${i}`}>
                <Gif key={`event${i}`} gif={item}>
                    <img style={this.logo} src = {item.source} />
                </Gif>
            </div>
        )
    }

    render() {    
        return( 
            <div className="eventList">
                <h2 className="card-title featuresTitle">FEATURES</h2>   

                <div className = "container">
                    <div className = "row">
                        {this.state.Gifs.map(this.eachEvent)}
                    </div>
                </div> 
            </div>
        )
    }

}


export default GifsList
