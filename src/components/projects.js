import React, { Component } from 'react';
import { MDLComponent } from 'react-mdl';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', display: 'flex'}}>
                        <CardTitle style={{color: 'black',paddingLeft: '100px',paddingBottom: '100px', height: '275px', background: 
                        'url(https://cdn4.iconfinder.com/data/icons/essential-3/32/387-Browser_Check-256.png) center / cover'}} >Project #1</CardTitle>
                        <CardText>
                            Simple x game using JavaScript.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', display: 'flex'}}>
                        <CardTitle style={{color: 'black',paddingLeft: '100px',paddingBottom: '100px', height: '275px', background: 
                        'url(https://cdn4.iconfinder.com/data/icons/essential-3/32/387-Browser_Check-256.png) center / cover'}} >Project #2</CardTitle>
                        <CardText>
                            Simple x game using JavaScript.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', display: 'flex'}}>
                        <CardTitle style={{color: 'black',paddingLeft: '100px',paddingBottom: '100px', height: '275px', background: 
                        'url(https://cdn4.iconfinder.com/data/icons/essential-3/32/387-Browser_Check-256.png) center / cover'}} >Project #3</CardTitle>
                        <CardText>
                            Simple x game using JavaScript.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>
                </div>
                
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto', display: 'flex'}}>
                        <CardTitle style={{color: 'black', height: '275', paddingBottom: '0px', background: 
                        'url(https://cdn2.iconfinder.com/data/icons/whcompare-isometric-web-hosting-servers/50/website-under-construction-512.png) center / cover'}} >
                            Project #1</CardTitle>
                        <CardText>
                            Simple x game using JavaScript.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Finished</Tab>
                    <Tab>Work in Progress</Tab>
                </Tabs>

                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;