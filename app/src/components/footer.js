import React, {Component} from 'react'
class Footer extends Component {
   
    backImage = {
        width: "100%",
        height: "100px",
        backgroundColor: "black"
    }
   
    render() {
        return(

            <div style = {this.backImage}> 
               <h4  className = "center footer-text"> <span dangerouslySetInnerHTML={{ "__html": "&copy;" }} /> 2019 Boards R Us by Miki Makmel & Dor Munsa </h4>
            </div>

        )
    }
}

export default Footer