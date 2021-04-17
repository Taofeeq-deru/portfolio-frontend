import React from "react";
import AllComponents from "./AllComponents";
import { data } from "../data";

class MainLayaout extends React.Component {
	state = {
		top: 0,
		bottom: 10,
		...data,
	};

	render() {
		return <AllComponents content={this.state} />;
	}
}

export default MainLayaout;
