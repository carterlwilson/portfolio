import React from 'react';
import GreetingPic from './images/linkedinpic.jpg'
import './styling/Greeting.css'
import TitleBar from './TitleBar';

class Greeting extends React.Component {
    render() {
        return (
            <div id="about" className="greeting-wrapper">
                <TitleBar />
                <div className="greeting">
                    <img src={GreetingPic} alt="Photo of me"></img>
                    <p>Hi! I'm Carter Wilson. I'm a computer science student at Portland State graduating in June 2020. I have full-stack development experience in Java and C#.</p>
                </div>
            </div>
        );
    }
}

export default Greeting