import React, { useState } from 'react';
import {db} from './firebase';

const ContactForm = () => {   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('contacts').add({
            name:name,
            email:email,
            message:message,
        })
        .then(() => {
            alert('Message has been submitted');
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setName("");
        setEmail("");
        setMessage("");
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>Name</label>
            <input placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <label>Message</label>
            <textarea placeholder="Message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <button type="submit" 
                style={{background: loader ? "#ccc": "#3c1053"}}>Submit</button>
        </form>

    );
}

export default ContactForm;