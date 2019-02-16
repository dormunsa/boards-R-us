import React, {Component} from 'react'
class Section1 extends Component {
   
    backImage = {
        width: "100%",
        height: "600px",
        backgroundImage: "url(assets/main.jpg)"
    }
   
    render() {
        return(

            <div style = {this.backImage}> 
                <a href="#" className="myButton">Get Details</a>

            </div>

        )
    }
}

export default Section1