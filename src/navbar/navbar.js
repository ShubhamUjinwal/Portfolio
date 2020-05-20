import React from 'react';
import './navbar.css';
import { Link} from "react-scroll";
import resume from "../images/Shubham_Ujinwal_resume.pdf";


export default class Navbar extends React.Component{
    
    
    componentDidMount(){
        this.handleEvent();
    }

    handleEvent = () => {

        const burger = document.querySelector('.burger-menu');
        const nav = document.querySelector('.menu');
        const navLinks = document.querySelectorAll('.main-menu a');

        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            navLinks.forEach((link, index)=> {
                if(link.style.animation){
                    link.style.animation='';
                }else{
                    link.style.animation = `navLinkFade 0.5s ease backwards ${index/7 +0.3}s`
                }
            });
            burger.classList.toggle('toggle');
        });
    }

    render(){
        return(
            <div className="navbar">
                <div className="resume-menu">
                    <a href={resume}>Resume</a>
                </div>

                <div className="burger-menu">
                    <div className="line top"></div>
                    <div className="line middle"></div>
                    <div className="line bottom"></div>
                </div>  

                <div className="menu">
                    <div className="main-menu">
                    <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >About</Link>
                        <Link
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Skills</Link>
                        <Link
                            activeClass="active"
                            to="timeline"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Timeline</Link>
                        <Link
                            activeClass="active"
                            to="project"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Projects</Link>
                        {/* <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >Contact</Link> */}
                    </div>

                    <div className="icons-menu">
                            <a href="https://github.com/ShubhamUjinwal" className="github"> </a>
                            <a href="https://www.linkedin.com/in/shubham-ujinwal-11321b141/" className="linkedin"> </a>
                    </div>
                </div>
            </div>
        );
    }
}