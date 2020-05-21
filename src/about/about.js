import React from 'react';
import './about.css';
import photo from '../images/me2.jpg';
import photo2 from '../images/download.png';

export default class About extends React.Component{
    render(){
        return(
            <section id="about">
            <div className="wrapper">
              <article>
                
                <div className="title">
                  <h3>Who's this guy?</h3>
                  <p className="separator" />
                </div>
                  <div className="desc">
                    <div></div>
                        <img id="me-img" src={photo2} alt={'Ph'}/>
                  </div>
                  <div className="desc">
                    <p>I recently graduated from Algonquin College with Computer Engineering Technology
                      and Computing Science as major with 2+ years of experience in software
                        and web development.
                    </p>
                    <p>I really enjoy solving problems as well as making things good and easy to use.
                      I can't stop learning new things; the more, the better.
                    </p>

                  </div>

                <div className="title second">
                  <h3>What does he do?</h3>
                  <p className="separator" />
                </div>
                <div className="desc full">
                  <p>
                    I worked as a Lab Technologist Co-op at Nokia as 
                    I gained technical and analytical skills and contributed to the company
                     by developing and enabling security settings on Windows 7, 
                     10 using Group Policy Object (GPO) in Active Directory and 
                     managing DHCP server in Linux operating system.
                  </p>
                  <p>
                    As a Backend developer, I worked in a group of 4 and developed an e-commerce app using 
                    React-Native, JavaScript, MongoDB, Expo platform, Git VCS. from 
                    scratch for KataniTech company. 
                  </p>
                  <p>
                    Currently focused on learning Kubernetes with AWS, MERN Stack Architecture and 
                    pursuing for AWS Solution Architect Exam.
                  </p>
                </div>
              </article>
            </div>
          </section>
        );
    }
}