import React, { Component } from "react";
import ModalClass from "./Modal";
import "./Projects.css";
import { List, Card } from "antd";

class ListClass extends Component {
	state = {};
	render() {
		const { language, identity } = this.props;
		return (
			<List
				grid={{
					gutter: 0,
					xs: 1,
					sm: 2,
					md: 2,
					lg: 3,
					xl: 3,
					xxl: 3,
				}}
				dataSource={language}
				renderItem={(item) => (
					<List.Item id={`image${item.id}${identity}`}>
						<Card
							hoverable
							className="theCard"
							cover={
								<div className="cover" style={{ height: 300 }}>
									<img
										src={item.image_1}
										alt="project"
										className="img-fluid imageCover"
										style={{
											height: 300,
										}}
									/>
									<div
										className="desc px-1"
										style={{ height: 300, width: "100%" }}
									>
										<p className="font-weight-bold title text-light text-center">
											{item.name}
										</p>
										<p className="description text-center text-light">
											{item.display_skills}
										</p>
										<ModalClass item={item} />
									</div>
								</div>
							}
							bodyStyle={{ display: "none" }}
							style={{
								height: 300,
								borderRadius: "none",
								border: "none",
							}}
						/>
					</List.Item>
				)}
			/>
		);
	}
}

export default ListClass;
