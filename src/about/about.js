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
                    <p>Recently completed my AWS Solutions Architect Associate Certification after finished
my 3-year advanced Diploma in Computer Engineering from Algonquin College.
                    </p>
                    <p>Skilled in agile processes, backend and frontend development, and creating a social media web application that
integrates with GraphQL API with subscriptions for real-time updates.
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
                  I led a group of four and worked as a React Developer on an e-commerce
                  app from scratch using the MERN Architecture for KataniTech Company.
                  </p>
                  <p>
                    Currently focused on polishing my problem solving skills, data structures & algorithms, and   cross-platform Web Development on AWS cloud.
                  </p>
                </div>
              </article>
            </div>
          </section>
        );
    }
}