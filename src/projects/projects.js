import React from 'react';
import './projects.css';
import logo from '../images/rsz_pp.png';
import dotnet from '../images/dotnet.png';
import compiler from '../images/c-programming.jpg';
import nextconnect from '../images/nextconnect.PNG';
import Project from './project/project';

export default class extends React.Component{
    render(){
        return(
            <div id="project">
                <div className="title">
                  <h3>Projects</h3>
                  <p className="separator" />
                </div>
            <section id="projects">
            <div className="projects-container">
                <div className="heading">
                {/* <p className="separator" /> */}
                </div>
                <div className="projects-wrapper">

                <Project
                    title="NextConnect"
                    img={nextconnect}
                    tech="js css react node"
                    link="https://github.com/ShubhamUjinwal/NextConnect"
                    repo="https://github.com/ShubhamUjinwal/NextConnect"
                >
                    <small>
                    Using NodeJS, React, ES6 , GraphQl, HTML, CSS and AWS.
                    </small>
                    <p>
                    NextConnect is a social media web application in which a user can make posts with text or media files.
                    </p>
                </Project>

                <Project
                    title="PopTikr"
                    img={logo}
                    tech="js css react node"
                    link="https://poptikr.com/"
                    repo="https://poptikr.com/"
                >
                    <small>
                    Using NodeJS, React Native, MongoDB, Express, CSS,  Mongoose and SendGrid.
                    </small>
                    <p>
                    This is a React Mobile Applicaton which lets the users create their own brand and sell their products.
                    PopTikr is a retail pop up shop.
                    </p>
                </Project>
            
                
                <Project
                    title="Blog Engine"
                    img={dotnet}
                    tech="js node css"
                    link="https://github.com/ShubhamUjinwal/BlogEngine"
                    repo="https://github.com/ShubhamUjinwal/BlogEngine"
                >
                    <small>Using HTML, CSS, AJAX, Razor, .NET MVC, Bootstrap, Azure and C#.</small>
                    <p>A Blog Engine where user can create profile and post their blogs by using ASP.NET MVC Core Architecture.</p>
                </Project>

                <Project
                    title="Compiler"
                    img={compiler}
                    tech="js node css"
                    link="https://github.com/ShubhamUjinwal/Compiler"
                    repo="https://github.com/ShubhamUjinwal/Compiler"
                >
                    <small>Using GNC compiler, C language and VS 2015.</small>
                    <p>Created a simple compiler using  Recursive Descent
Predictive Parser (RDPP), data structures
                        , memory management and file I/O. 
                        The purpose of this project is to understand how a compiler works.
                    </p>
                </Project>
            
                </div>
            </div>
            </section>
            </div>
        );
    }
}