import React from 'react';
import './background-title.css';

export default class BackgroundTitle extends React.Component{
    render(){
        return(
            <div className="background-title">
                <h1 >Shubham Ujinwal</h1>
                <br/>
                <br/>
                <h3>Passionate about <span>AWS</span> and Web development</h3>
            </div>
        );
    }
}