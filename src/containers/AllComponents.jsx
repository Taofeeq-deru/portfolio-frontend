import React, { Component, lazy, Suspense } from "react";
import { Affix, BackTop } from "antd";
import { UpCircleFilled } from "@ant-design/icons";
import Loading from "../components/Loading";
import Nav from "../components/Nav";

const Introduction = lazy(() => import("../components/Intro"));
const About = lazy(() => import("../components/About"));
const Projects = lazy(() => import("../components/Projects"));
const Contact = lazy(() => import("../components/Contact"));

class AllComponents extends Component {
	state = {};
	render() {
		const { content } = this.props;
		return (
			<Suspense fallback={<Loading />}>
				<BackTop style={{ fontSize: 36 }}>
					<UpCircleFilled />
				</BackTop>
				<Introduction />
				<Affix offsetTop={content.top}>
					<Nav
						onClick={() => {
							this.setState({
								top: content.top + 10,
							});
						}}
					/>
				</Affix>
				<div style={{ backgroundColor: "#e9e9e9" }}>
					<About contact={content.contact} skill={content.skill} />
				</div>
				<div style={{ backgroundColor: "#ffffff" }}>
					<Projects project={content.project} />
				</div>
				<div style={{ backgroundColor: "#333846" }}>
					<Contact contact={content.contact} />
				</div>
			</Suspense>
		);
	}
}

export default AllComponents;
