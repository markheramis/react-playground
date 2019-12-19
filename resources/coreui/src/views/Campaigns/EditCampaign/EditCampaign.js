import React, { Component } from "react";
import Axios from "axios";

class EditCampaign extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Axios.get('https://localhost:8000/api/campaign/').then((response) => {
      let campaign = response.data;
      this.setState({
        campaign
      });
    })
  }

  render() {
    return (
      <div className="animated fadeIn">
        <h1>Edit Campaign</h1>
      </div>
    );
  }
}

export default EditCampaign;
