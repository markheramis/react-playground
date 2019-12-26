import React, {Component} from 'react';
import {
  Container, 
  Row, 
  Col, 
  CardGroup, 
  Card, 
  CardBody, 
  Button, 
  Input, 
  InputGroup, 
  InputGroupAddon
} from 'reactstrap';
import AuthService from '../../../service/AuthService'

class Login extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      message: ''
    }

    this.self = this

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if(AuthService.getUser()) {
      // if has user session
      this.props.history.push('/')
    }else{
      // if no user session
      localStorage.clear(); // make sure everything is cleaned
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    const credentials = {
      email: this.state.email,
      password: this.state.password
    };
    AuthService.login(credentials).then( (response) => {
      if(!response.errors) {
        // Login success
        this.props.history.push('/')
      }else{
        // Login failed
      }
    }, () => {
      console.log('Error')
    })
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value})
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <form onSubmit={this.handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="icon-user"></i>
                          </span>
                        </div>
                        <Input type="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this)} placeholder="Enter Username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="icon-lock"></i>
                          </span>
                        </div>
                        <Input type="password" name="password" value={this.state.password} onChange={this.handleChange.bind(this)} placeholder="Password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button type="submit" color="primary" className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Button color="primary" className="mt-3" active href="/register">Register Now!</Button>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
