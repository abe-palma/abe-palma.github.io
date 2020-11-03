import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div className="about-body">
                <Grid className="about-grid">
                    <img
                        src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
                        alt="avatar"
                        style={{height: '300px'}}
                    />
                    <Cell col={12}>
                        <div className="about-text">
                            <h1>About Me</h1>
                            <p>Hello! My name is Abraham Palma and I am a Mexican American programmer. I recently graduated from CSUN and am ready to tackle 
                            the professional world. I love programming and find great joy when my programs work as intended. I have experience with an assortment
                            of languages but am always looking to learn more. My military background keeps me disciplined and ready to take on any task handed to me.
                            I was honorably discharged from the military after 8 years of service and I learned many important life skills while serving. With my successful
                            military service behind me, and the achievement of graduating from college, I am confident i wil find success professionally.</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;