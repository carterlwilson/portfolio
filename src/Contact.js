import React from 'react';
import './styling/Contact.css'

class contact extends React.Component {
    render() {
        return(
            <div className="contact" id="contact">
                <div className="contact-form-wrapper">
                    <form>
                        <h2>Contact Me</h2>
                        <label for="Name">name</label>
                        <input type="text" name="Name"/>
                        <label for="Email">email</label>
                        <input type="email" name="Email"/>
                        <label for="Message">message</label>
                        <textarea name="Message"/>
                        <input type="submit" value="Submit" id="submit-button"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default contact