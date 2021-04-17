import React from "react";
import { Menu } from "antd";
import "./Nav.css";

class Nav extends React.Component {
	render() {
		return (
			<Menu theme="dark" mode="horizontal" style={{ lineHeight: "60px" }}>
				<Menu.Item key="home">
					<a href="#Intro">Home</a>
				</Menu.Item>
				<Menu.Item key="about">
					<a href="#About">About</a>
				</Menu.Item>
				<Menu.Item key="portfolio">
					<a href="#Projects">Projects</a>
				</Menu.Item>
				<Menu.Item key="contact">
					<a href="#Contact">Contact</a>
				</Menu.Item>
			</Menu>
		);
	}
}

export default Nav;
