import React from "react";
import axios from "axios";
import AllComponents from "./AllComponents";
import Loading from "../components/Loading";

class MainLayaout extends React.Component {
  state = {
    loading: true,
    top: 0,
    bottom: 10,
    contact: "",
    skill: "",
    project: "",
  };

  componentDidMount() {
    axios
      .get(`https://meettaofeeq.herokuapp.com/api/`)
      .then((res) => {
        console.log("fetching");
        this.setState({
          contact: res.data.contact[0],
          skill: res.data.skill,
          project: res.data.project,
        });
      })
      .then(() => {
        this.setState({ loading: false });
        console.log("fetched");
      });
  }

  render() {
    const isLoading = this.state.loading;
    return (
      <>{isLoading ? <Loading /> : <AllComponents content={this.state} />}</>
    );
  }
}

export default MainLayaout;
