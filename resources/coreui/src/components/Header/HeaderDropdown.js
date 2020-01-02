import React, { Component } from "react";
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown
} from "reactstrap";
import { withRouter } from "react-router-dom";
import AuthService from "../../service/AuthService";

class HeaderDropdown extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  dropAccnt() {
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img
            src={"http://localhost:8000/public/img/avatars/6.jpg"}
            className="img-avatar"
            alt="admin@bootstrapmaster.com"
          />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center">
            <strong>Account</strong>
          </DropdownItem>
          <DropdownItem disabled>
            <i className="fa fa-user"></i> Profile
          </DropdownItem>
          <DropdownItem disabled>
            <i className="fa fa-wrench"></i> Settings
          </DropdownItem>
          <DropdownItem disabled>
            <i className="fa fa-usd"></i> Payments
            <Badge color="secondary">42</Badge>
          </DropdownItem>
          <DropdownItem header tag="div" className="text-center">
            <strong>Session</strong>
          </DropdownItem>
          <DropdownItem onClick={this.handleLogOut.bind(this)}>
            <i className="fa fa-lock"></i> Logout
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  render() {
    const { ...attributes } = this.props;
    return this.dropAccnt();
  }

  handleLogOut() {
    AuthService.logout();
    this.props.history.push("/");
  }
}

export default withRouter(HeaderDropdown);
