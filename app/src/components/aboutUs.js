import React, {Component} from 'react'

class AboutUs extends Component {
   
    backImage = {
        width: "100%",
        height: "600px",
        backgroundImage: "url(assets/about.jpg)",
        backgroundSize: 'cover'
    }
   
    render() {
        return(

            <div  style = {this.backImage}> 
            <div className = "textPosition">
              <h2> The Makmel & Munsa </h2>
              <h2> SNOWBOADING <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> </h2>
              <p> put some text.... </p>
            </div>
            </div>

        )
    }
}

export default AboutUs