import React, {Component} from 'react'
class Footer extends Component {
   
    backImage = {
        width: "100%",
        height: "50px",
        backgroundColor: "black"
    }
   
    render() {
        return(

            <div style = {this.backImage}> 
               <h6 className="footerText">&copy; 2019 Boards R Us by Miki Makmel & Dor Munsa</h6>
            </div>

        )
    }
}

export default Footer