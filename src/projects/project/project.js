import React from 'react';
import './project.css';

const Project = props => {
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';
    const tech = {
        sass: 'fab fa-sass',
        css: 'fab fa-css3-alt',
        js: 'fab fa-js-square',
        react: 'fab fa-react',
        vue: 'fab fa-vuejs',
        d3: 'far fa-chart-bar',
        node: 'fab fa-node'
      };
    return(
        <div className="project">
            <div className="project-img">
            <a className="project-link" href={link}  >
                <img className="project-image"  src={props.img} 
                    alt={'Screenshot of ' + props.title} />
            </a>
            </div>
            <div className="project-details">
                <div className="project-title">
                <p className="icons">
                    {props.tech.split(' ').map(t => (
                    <i className={tech[t]} key={t} />
                    ))}
                </p>
                    {props.title}{' '}
                </div>
                {props.children}
                <div className="buttons">
                    <a href={repo} target="_blank" rel="noopener noreferrer">
                        View source <i className="fas fa-external-link-alt" />
                    </a>
                    {/* <a href={link} target="_blank" rel="noopener noreferrer">
                        Try it Live <i className="fas fa-external-link-alt" />
                    </a> */}
                </div>
            </div>
        </div>
    );
    
};
export default Project;