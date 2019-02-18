import React, {Component} from 'react'
class Section1 extends Component {
    constructor(props) {
      
        super(props)
            if(window.innerWidth <= 480){
                this.state = {
                   isMonbile:true
                }
            }
           
    
    }
    backImage = {
        width: "100%",
        height: "600px",
        backgroundImage: "url(assets/main2.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
   
    render() {
        return(
            <div className = "hide_mobile" style = {this.backImage}> 
                <h1 className="mainText hide_mobile">RUN OVER<br/>EVERYTHING</h1>
                {/* <a href="#" className="myButton">Get Details</a> */}
            </div>
        )
    }
}

export default Section1