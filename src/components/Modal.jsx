import React from "react";
import { Modal, Button, Carousel } from "antd";

class ModalClass extends React.Component {
	state = { visible: false, windowWidth: window.innerWidth };

	componentDidMount() {
		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize = () => {
		this.setState({ ...this.state, windowWidth: window.innerWidth });
	};

	showModal = () => {
		this.setState({
			...this.state,
			visible: true,
		});
	};

	handleOk = (e) => {
		this.setState({
			...this.state,
			visible: false,
		});
	};

	handleCancel = (e) => {
		this.setState({
			...this.state,
			visible: false,
		});
	};

	render() {
		const { item } = this.props;

		const { visible, windowWidth } = this.state;

		return (
			<div>
				<Button size="large" onClick={this.showModal} ghost>
					View Details
				</Button>
				<Modal
					title={null}
					centered
					visible={visible}
					style={{ zIndex: 1024 }}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
					footer={null}
				>
					<Carousel autoplay effect="fade">
						<img
							src={item.image_1}
							alt="project"
							className="img-fluid"
							loading="lazy"
						/>
						<img
							src={item.image_2}
							alt="project"
							className="img-fluid"
							loading="lazy"
						/>
						<img
							src={item.image_3}
							alt="project"
							className="img-fluid"
							loading="lazy"
						/>
					</Carousel>
					<h3>
						{item.name}
						<span>
							<br />
							<em style={{ fontSize: "16px", fontWeight: "normal" }}>
								{item.display_skills}
							</em>
						</span>
					</h3>
					<p>{item.about_project}</p>
					<a
						href={windowWidth > 768 ? item.project_url : item.mobile_url}
						target="project"
						rel="noopener noreferrer"
						className="mr-3"
					>
						<Button size="large">View Project</Button>
					</a>
					<a href={item.repo_url} target="project" rel="noopener noreferrer">
						<Button size="large">
							{item.type === "public" ? "View Repo" : "Private Repo"}
						</Button>
					</a>
				</Modal>
			</div>
		);
	}
}

export default ModalClass;
