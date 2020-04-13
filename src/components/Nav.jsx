import React from 'react';
import {Navbar, Nav as Navigation } from 'react-bootstrap'

function Nav(props){
    return(
       <Navbar bg="light">
       <Navigation className="mr-auto">
       {props.children.map(item => <Navigation.Link>{item}</Navigation.Link>)}
       </Navigation>
       </Navbar>
    )

}
export default Nav;