import React, { Component, useState } from 'react';
import { Grid, Cell } from 'react-mdl';
import {db} from './firebase';
import ContactForm from './contactform';

class Contact extends Component {
    
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Abraham Palma</h2>
                        <img
                            src="https://cdn0.iconfinder.com/data/icons/Hand_Drawn_Web_Icon_Set/128/email_edit.png"
                            alt="email"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>If you have any questions or would like to contact me, please feel 
                        free to use the form provided. </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                        <ContactForm />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;