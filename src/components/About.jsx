import React, { Component } from "react";
import { List } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import "./About.css";

class About extends Component {
	state = {};
	render() {
		const { contact, skill } = this.props;

		return (
			<div className="container about">
				<div id="About">
					<div className="row">
						<div className="col-md-6 offset-md-3">
							<h1>ABOUT</h1>
						</div>
					</div>
				</div>
				<div id="content">
					<div className="row">
						<div className="col-md-6">
							<ScrollAnimation
								animateIn="animate__fadeInLeft"
								animateOut="animate__fadeOutLeft"
								duration={1}
							>
								<div className="info">
									<img
										src={contact.avatar}
										alt="avatar"
										className="avatar"
										loading="lazy"
									/>
									<h2>Who am I?</h2>
									<p>{contact.about_me}</p>
								</div>
							</ScrollAnimation>
						</div>
						<div className="col-md-6">
							<ScrollAnimation
								animateIn="animate__fadeInRight"
								animateOut="animate__fadeOutRight"
								duration={1}
							>
								<div>
									<h3>my tech skills</h3>
									<List
										size="large"
										itemLayout="horizontal"
										dataSource={skill}
										renderItem={(item) => (
											<List.Item>
												<b className="mx-auto">{item.language}</b>
											</List.Item>
										)}
									/>
								</div>
							</ScrollAnimation>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
