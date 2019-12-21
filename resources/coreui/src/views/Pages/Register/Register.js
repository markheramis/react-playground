import React, {Component} from 'react';
import UserService from '../../../service/UserService';

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  Button,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';
class Register extends Component {

  /**
   * [constructor description]
   *
   * @param   {[type]}  props  [props description]
   *
   * @return  {[type]}         [return description]
   */
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      password2: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  /**
   * [componentDidMount description]
   *
   * @return  {[type]}  [return description]
   */
  componentDidMount() {
    if (AuthService.getUser()) {
      // if has user session
      this.props.history.push('/')
    } else {
      // if no user session
      localStorage.clear(); // make sure everything is cleaned
    }
  }
  /**
   * [onSubmit description]
   *
   * @param   {[type]}  e  [e description]
   *
   * @return  {[type]}     [return description]
   */
  onSubmit(e) {
    e.preventDefault()
    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    }
    
    UserService.register(user).then( response => {
      if(!response.error) {
        console.log(response)
        this.props.history.push('/login')
      }else{
        // error
      }
    })
  }
  /**
   * [onChange description]
   *
   * @param   {[type]}  e  [e description]
   *
   * @return  {[type]}     [return description]
   */
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <form onSubmit={this.onSubmit}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input type="text" name="name" value={this.state.name} onChange={this.onChange} placeholder="Enter username"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <Input type="email" name="email" value={this.state.email} onChange={this.onChange} placeholder=" Enter Email"/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-lock"></i>
                        </span>
                      </div>
                      <Input type="password" name="password" value={this.state.password} onChange={this.onChange} placeholder="Password"/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-lock"></i>
                        </span>
                      </div>
                      <Input type="password" name="password2" value={this.state.password2} onChange={this.onChange} placeholder="Repeat password"/>
                    </InputGroup>
                   
                    <Row>
                      <Col xs="12" sm="6">
                         <Button type="submit" color="primary" block>Create Account</Button>
                      </Col>
                      <Col xs="12" sm="6">
                        <Button color="success" block href="/login">Already have an Account?</Button>
                      </Col>
                    </Row>
                  </form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
