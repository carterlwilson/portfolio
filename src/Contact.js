import React from 'react';
import './styling/Contact.css';
import emailjs from 'emailjs-com';
import Alert from 'simple-react-alert';
import {useAlert} from 'react-alert'

class contact extends React.Component {
    render() {
        return(
            <div className="contact" id="contact">
                <div className="contact-form-wrapper">
                    <form onSubmit={this.sendemail}>
                        <h2>Contact Me</h2>
                        <label for="user_name">name</label>
                        <input type="text" name="user_name"/>
                        <label for="user_email">email</label>
                        <input type="email" name="user_email"/>
                        <label for="message">message</label>
                        <textarea name="message"/>
                        <input type="submit" value="Send" id="submit-button"/>
                    </form>
                </div>
            </div>
        )
    }

    sendemail(e) {
        e.preventDefault();

        emailjs.sendForm("gmail", "template_chBKfdgR", e.target, "user_N5e508TDs5fUIBFVJqXLc")
        .then((result) => {
            alert("Thanks for contacting me!")
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
}

export default contact