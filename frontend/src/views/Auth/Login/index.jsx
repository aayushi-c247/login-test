
import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Formik, Field } from 'formik';
import { Button, Col, Container, Form, Row, Card, } from "react-bootstrap";
import { LoginSchema } from "../../../utilities/Validation"
import { AuthLogin } from '../../../services';
import { useAuth } from "../../../hooks";
import { AllAction } from '../../../redux/Action';

import './style.module.scss'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       email: '', 
       password: '',
       status: false
    };
  }

  componentDidUpdate(prevProps){
    console.log('prevProps',prevProps);
    console.log('this.props.loginState',this.props.loginState);
    if(prevProps.loginState.success!=this.props.loginState.success){
      // console.log('Success in login')
      // if (this.props.loginState.success) {
      //   return <h1> Success</h1>
      // }
      this.setState({
       status: true

      })
    }


  }

   handleSubmit = async (data) => {
    console.log(data,"data")
    if(data){
      this.props.loginUser(data);
    }

    // const result = await AuthLogin(data);

    // if (result.status !== 200) {

    //   const errorMessage = result.response.data.errors.email;

    //   console.log(errorMessage, "errorMessage")

    //   return;

    // }

  }

  render(){
    const {email, password,status} = this.state
console.log('status in render',status);
    return(
   
      <Container>
       
        <Row className="justify-content-md-center mt-5">
          <Col lg={5} md={5}>
            <Card>
              <Card.Body>
                <h2>Login</h2>
                <>
                    <Formik
                      initialValues={{email, password}}
                      validationSchema={LoginSchema}
                      // handleSubmit
                      onSubmit={(values, actions) => {
                        this.handleSubmit(values)
                      }}
                    >
                      {({ errors, touched, values, handleSubmit, handleChange }) => (
                        <Form onSubmit={handleSubmit} className={"mb-5"}>
                          <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Field
                              type="email"
                              placeholder="Enter email"
                              name={"email"}
                              value={values.email}
                              onChange={handleChange}
                              className={"form-control"}
                              id={"email"}
                            />
                            {errors.email && touched.email ? (
                              <p className='text-danger'>{errors.email}</p>
                            ) : null}
                          </Form.Group>
  
                          <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Field
                              type="password"
                              placeholder="Password"
                              name={"password"}
                              value={values.password}
                              onChange={handleChange}
                              className={"form-control"}
                              id={"password"}
                            />
                            {errors.password && touched.password ? (
                              <p className='text-danger'>{errors.password}</p>
                            ) : null}
                          </Form.Group>
                          <div className={'d-flex'}>
                            <Button variant="primary" type="submit">
                              Submit
                            </Button>
                            <Link to="/signup" className={"px-5 d-inline-block"}>Signup</Link>
                          </div>
  
                        </Form>
                      )}
                    </Formik>
                  </>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
     
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state in mapState',state);
  return {
    loginState: state.appReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (userData) => {
      dispatch(AllAction.loginUser(userData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
