import React from "react";
import "./timeline.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default class Timeline extends React.Component{
    render(){
        return(
            <div id="timeline">
                <div className="title">
                  <h3>Timeline</h3>
                  <p className="separator" />
                </div>

            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                         background: "#0c0c0c", 
                         color: '#e5e2e2',
                         boxShadow: '0px 20px 10px -10px #25293450',
                         fontFamily: 'Segoe UI ,Tahoma, Geneva, Verdana, sans-serif'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #0c0c0c' }}
                    iconStyle={{ background: 'gray', color: 'cyan' }}

                >
                    <h1 style={{fontFamily:'Libre Baskerville, serif', color:'white'}} className="vertical-timeline-element-title">Backend Developer</h1>
                    <h2 style={{fontFamily:'Libre Baskerville, serif', color:'cyan'}} className="vertical-timeline-element-subtitle">KataniTech</h2>
                    <p>
                    Worked with group of 4 and developed an ecommerce app using MERN Stack Architecture as it was part of my Academics.
                    </p>
                    <p style={{color:'grey'}}>January 2020 - April 2020 (4 months)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                         background: "#0c0c0c", 
                         color: '#e5e2e2',
                         boxShadow: '0px 20px 10px -10px #25293450',
                         fontFamily: 'Segoe UI ,Tahoma, Geneva, Verdana, sans-serif'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #0c0c0c' }}
                    iconStyle={{ background: 'gray', color: 'cyan' }}
                   
                >
                    <h1 style={{fontFamily:'Libre Baskerville, serif', color:'white'}} className="vertical-timeline-element-title">Lab Technologist</h1>
                    <h2 style={{fontFamily:'Libre Baskerville, serif', color:'cyan'}} className="vertical-timeline-element-subtitle">Nokia</h2>
                    <p>
                    Active Directory, Troubleshooting, DHCP server in Linux, Technical Support.
                    </p>
                    <p style={{color:'grey'}}>September 2019 - April 2020 (8 months)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                         background: "#0c0c0c", 
                         color: '#e5e2e2',
                         boxShadow: '0px 20px 10px -10px #25293450',
                         fontFamily: 'Segoe UI ,Tahoma, Geneva, Verdana, sans-serif'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #0c0c0c' }}
                    iconStyle={{ background: 'gray', color: 'cyan' }}

                >
                    <h1 style={{fontFamily:'Libre Baskerville, serif', color:'white'}} className="vertical-timeline-element-title">Team Leader</h1>
                    <h2 style={{fontFamily:'Libre Baskerville, serif', color:'cyan'}} className="vertical-timeline-element-subtitle">A&W</h2>
                    <p>
                    Assisting the coworkers to achieve the established sales goals. Lead new staff members and trained about the duties and working culture.
                    
                    </p>
                    <p style={{color:'grey'}}>January 2018 - January 2020 (2 years)</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                         background: "#0c0c0c", 
                         color: '#e5e2e2',
                         boxShadow: '0px 20px 10px -10px #25293450',
                         fontFamily: 'Segoe UI ,Tahoma, Geneva, Verdana, sans-serif'
                    }}
                    contentArrowStyle={{ borderRight: '7px solid  #0c0c0c' }}
                    iconStyle={{ background: 'gray', color: 'cyan' }}

                >
                    <h1 style={{fontFamily:'Libre Baskerville, serif', color:'white'}} className="vertical-timeline-element-title">Computer Engineering Technology</h1>
                    <h2 style={{fontFamily:'Libre Baskerville, serif', color:'cyan'}} className="vertical-timeline-element-subtitle">A&W</h2>
                    <p>
                    Award: Dean Honors's List
                    <br></br>GPA: 3.54
                    
                    </p>
                    <p style={{color:'grey'}}>January 2017 - April 2020 (3 years and 4 months)</p>
                </VerticalTimelineElement>
            </VerticalTimeline>


            </div>
        );
    }
}