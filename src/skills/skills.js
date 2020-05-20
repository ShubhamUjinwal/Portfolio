import React from "react";
import './skills.css';
import { PieChart } from "../skills/charts/Charts";
import "../skills/charts/style.css";

export default class Skills extends React.Component{
    render(){

		const frontend = {
			JavaScript:20,
			ReactJS: 40,
			HTML: 20,
			CSS: 20
		};

		const backend = {
			NodeJS: 30,
			MongoDB	:30,
			Express: 30,
		};

		const languages = {
			Java: 10,
			C: 10,
			"C++": 10,
			Python:10,
		};

		const others = {
			AWS:60,
			Kubernetes:20,
			Docker: 10,
			Azure:10,
			Git:10
		};
		
        return(
            <div id="skills">
				<div className="title">
                  <h3>Skills</h3>
                  <p className="separator" />
                </div>

				<div className="section">
					<div className="section-title">
						<h3>Front-End Developer</h3>
					</div>
					
					<div className="section-content">
						<main>
							<PieChart data={frontend} />
						</main>
					</div>
				</div>
				<div className="section">
					<div className="section-title">
						<h3>Back-End Developer</h3>
					</div>
					
					<div className="section-content">
						<main>
							<PieChart data={backend} />
						</main>
					</div>
				</div>
				<div className="section">
					<div className="section-title">
						<h3>Programming Languages</h3>
					</div>
					
					<div className="section-content">
						<main>
							<PieChart data={languages} />
						</main>
					</div>
				</div>
				<div className="section">
					<div className="section-title">
						<h3>Other skills</h3>
					</div>
					
					<div className="section-content">
						<main>
							<PieChart data={others} />
						</main>
					</div>
				</div>
            </div>
        );
    }
}