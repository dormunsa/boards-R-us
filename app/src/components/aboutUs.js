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
            <div style={this.backImage}> 
                <h1 className="aboutUsHeadline">ABOUT US<span dangerouslySetInnerHTML={{ "__html": "&reg;" }} /></h1>
                <p className="aboutUsParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis, augue at tristique pretium, nibh tellus sagittis eros, vitae sodales dui justo non augue. Nam sit amet pulvinar leo. Mauris lectus tellus, gravida at libero quis, iaculis vulputate mauris. Mauris id dolor enim. Integer posuere mi purus, vitae ornare lorem cursus ullamcorper. Pellentesque ante magna, pellentesque feugiat mattis a, fermentum nec odio. Nullam sit amet elit ut tortor tincidunt viverra in nec sapien. Curabitur euismod blandit nibh, vel accumsan mauris. Phasellus condimentum commodo velit, quis tristique sapien mattis feugiat. Curabitur pretium dapibus tellus, eu rutrum leo vestibulum posuere. Duis vestibulum semper tellus a congue. Maecenas quis ex et massa dictum lacinia id in purus.</p>
            </div>
        )
    }
}

export default AboutUs