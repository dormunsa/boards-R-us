import React, { Component } from 'react'
import SnowBoard from './snowBoard'
// 

class SnowBoardList extends Component {

    constructor(props) {
        super(props)
        this.state = { boards: [] }
        this.topPicks = [];
        
        this.eachEvent = this.eachEvent.bind(this)
        this.add = this.add.bind(this)
      
    
    }
    componentWillMount() {
        
        var self=this
        const url = 'https://boards-r-us-mm.herokuapp.com/checkIfUserIsSigned'
        const prox = 'https://cors-anywhere.herokuapp.com/'
        const dev = 'http://localhost:3000/getUserID/202'
        fetch(`${dev}`)
        .then(response => {
           
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong ...');
          }
        })
        .then(data => data.map(item => {
            
            self.add(item.name ,item.topPicks );
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
                width: "50px",
                height : "50px",
                fontWeight : "bold",
                display: "block",
                margin: "0 auto "
            }
           

    add(name, topPicks) {
        this.setState(prevSate => ({
            boards: topPicks
        }))
    }

  
    eachEvent(item, i) {
       
        return(
            <div className = "col-12 col-lg-4 card"  key = {`container${i}`} style={{width: '18rem', marginBottom: '7px'}}>
            <div className = "card-body">
                <SnowBoard key = {`event${i}`}  board = {item}>
                 <div className = "textCenter" >
                 <h5 className = "card-title">{item.name}</h5>
                    <img style={this.logo} src = {item.imageSource} />
                    <h6 className = "card-title">{item.ridingStyle}</h6>

                   

                </div>
                    
                    
                </SnowBoard>
            </div>
        </div>
        )
    }

    render() {
        
        return( 
            <div className="eventList">
                <div className = "textCenter">
                <h2 className = "card-title" style = {{marginBottom : "40px"}}>SNOWBOARDS</h2>
                    
                </div>
                <div className = "container">
                 <div className = "row">
                 { this.state.boards.map(this.eachEvent)}
                 </div>
                </div>
               
            </div>
        )
    }

}


export default SnowBoardList
