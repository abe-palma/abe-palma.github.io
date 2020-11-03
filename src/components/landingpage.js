import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://img.pngio.com/desktop-computer-icon-png-26595-free-icons-library-desktop-icon-png-980_892.jpg"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Software Developer/Engineer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | React | ReactNative | C | C++ | Java</p>
                        <div className="social-links">
                            <a href="https://www.linkedin.com/in/abraham-palma-18b030126/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>

                            <a href="https://github.com/abe-palma" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;