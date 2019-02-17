import React, {Component} from 'react'
class Section1 extends Component {
   
    backImage = {
        width: "100%",
        height: "600px",
        backgroundImage: "url(assets/main2.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
   
    render() {
        return(
            <div style = {this.backImage}> 
                <h1 className="mainText">RUN OVER<br/>EVERYTHING</h1>
                <a href="#" className="myButton">Get Details</a>
            </div>
        )
    }
}

export default Section1