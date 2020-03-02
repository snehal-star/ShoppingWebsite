import React from 'react';
import HomeNavbar from './navbar';
import Slideimages from './slideimages'
export default class HomePage extends React.Component{
    render(){
        return(
            <div>
                <HomeNavbar/>
                <Slideimages/>
            </div>
        );
    }
}