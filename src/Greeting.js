import React from 'react';
import GreetingPic from './images/me.JPEG'
import './styling/Greeting.css'

class Greeting extends React.Component {
    render() {
        return (
            <div className="greeting-wrapper">
                <div className="greeting">
                    <img src={GreetingPic} alt="Photo of me"></img>
                    <p>Hi! I'm Carter Wilson. I'm a graduate computer science student at Portland State.</p>
                </div>
            </div>
        );
    }
}

export default Greeting