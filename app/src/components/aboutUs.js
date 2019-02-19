import React, {Component} from 'react'

class AboutUs extends Component {
   
    backImage = {
        width: "100%",
        height: "954px",
        backgroundImage: "url(assets/section2.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover'
    }
   
    render() {
        return(
            <div className = "hide_mobile back" style={this.backImage}> 
                <h1 className="aboutUsHeadline hide_mobile">Boards R Us&reg;</h1>
                <p className="aboutUsParagraph hide_mobile">
                    The company was originally founded by Miki Makmel and Dor Munsa at Shenkar college.<br/><br/>
                    Everything we do at "Boards R Us" started in the mountains.<br/>
                    From getting the most out of every journey to chasing snow around the globe,<br/> 
                    we've charged ahead to innovate and change the way people enjoy the outdoors since day one.<br/><br/> 
                    Our main purpose is to match you with your perfect board taking into consideration<br/> body measures,  
                    riding style, and riding level.<br/>
                    So just fill in your details and we will take care of the rest!<br/><br/>
                    See you in the mountains!<br/> 
                </p>
            </div>
        )
    }
}

export default AboutUs