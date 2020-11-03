import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"
                                alt="avatar"
                                style={{height: '200px', paddingTop: '30px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}>Abraham Palma</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid  #3c1053', width: '50%'}}/>
                        <p>Intellectually curious and detail-oriented individual with Bachelor’s degree in Computer Science. Have some
                        experience with JavaScript, HTML, CSS, Java, C, and C++. Looking to get my career underway and willing to
                        learn quickly to get the job done.</p>
                        <hr style={{borderTop: '3px solid  #3c1053', width: '50%'}}/>
                        <h5>Phone</h5>
                        <p>(818) 793-7364</p>
                        <h5>Email</h5>
                        <p>abe.palma@outlook.com</p>
                        <hr style={{borderTop: '3px solid  #3c1053', width: '50%'}}/>
                    </Cell>
                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        <Education 
                            startYear={2017}
                            endYear={2020}
                            schoolName="California State University, Northridge"
                            schoolDescription="Graduated with a Bachelor of Science in Computer Science"
                        />

                        <hr style={{borderTop: '3px solid  #ad5389'}} />
                        <h2>Experience</h2>
                        <Experience 
                            startYear={2002}
                            endYear={2005}
                            jobName="Advanced Field Artillery Tactical Data Systems Specialist"
                            company="US Army, Fort Sill, OK"
                            jobDescription="Operated data systems for the howitzer cannons. Delivered fire support for 
                            the infantry and tank units by sending fire missions to the howitzers from a computer and set 
                            up and loaded radios with an ANCD. Had a secret clearance while working this job. Honorably discharged from active duty."
                        />
                        <Experience 
                            startYear={2006}
                            endYear={2010}
                            jobName="Radiology Specialist"
                            company="US Army Reserve, San Diego, CA"
                            jobDescription="Operated diagnostic equipment to produce high quality radiographs which were inspected by
                            Radiologists to find injuries or conditions causing illness. Honorably discharged from military."
                        />
                        <hr style={{borderTop: '3px solid  #ad5389'}} />
                        <h2>Skills</h2>
                        <Grid>
                            <Cell col={4}></Cell>
                            <Cell col={8}>
                            <List className="resume-list">
                                <ListItem style={{color: 'white'}}>
                                    <ListItemContent icon="check">Have some experience in multiple languages so I can learn quickly and adapt to the job at hand.</ListItemContent>
                                </ListItem>
                                <ListItem style={{color: 'white'}}>
                                    <ListItemContent icon="check">Great communication skills.</ListItemContent>
                                </ListItem>
                                <ListItem style={{color: 'white'}}>
                                    <ListItemContent icon="check">Great team worker due to time served in the military.</ListItemContent>
                                </ListItem>
                                <ListItem style={{color: 'white'}}>
                                    <ListItemContent icon="check">Always ready to work and punctual.</ListItemContent>
                                </ListItem>
                            </List>
                            </Cell>
                        </Grid>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;