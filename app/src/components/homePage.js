import React, { Component } from 'react'
import Header from './header'
import Section1 from './section1.js'
import SnowBoardList from './snowBoardList.js'
import AboutUs from './aboutUs.js'
import GifsList from './GifsList.js'
import Footer from './footer.js'

class HomePage extends Component {
    active = {
        color: "#4248FF",
        fontWeight: "bold",
        textDecoration: "none",
    }
    NotActive = {
        color: "white",
        fontWeight: "regular",
        textDecoration: "none",
    }
    header = {
        backgroundColor: "#000000",
        marginBottom: '20px'
    }
    logo = {
        width: "50px",
        height : "50px",
        fontWeight : "bold"
    }
   
    render() {
        return(
                <div>
                    <Header>
                    </Header>
                    <Section1>
                    </Section1>
                    <SnowBoardList>
                        </SnowBoardList>
                        <AboutUs>
                        </AboutUs>
                        <GifsList>
                        </GifsList>
                        <Footer>
                        </Footer>
                </div>
                
        )
    }
}

export default HomePage