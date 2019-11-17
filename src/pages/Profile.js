import React, { Component } from "react";
import API from "../utils/API";


class Profile extends Component {
  state = {
    user: [],
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.getUser()
      .then(res =>
        this.setState({ user: res.data, })
      )
      .catch(err => console.log(err));
  };



  render() {
    return (
      <>
        <h2>Welcome userName</h2>
        <hr />

      </>

    )
  }
};


export default Profile;
