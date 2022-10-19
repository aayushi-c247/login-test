import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Formik, Field } from 'formik';
import { Button, Col, Container, Form, Row, Card, } from "react-bootstrap";
import { AuthSchema } from "../../../utilities/Validation"
import { AllAction } from '../../../redux/Action';

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
    if(prevProps.loginState.success!=this.props.loginState.success){
      this.setState({
       status: true
      })
    }
  }

   handleSubmit = async (data) => {
    if(data){
      this.props.loginUser(data);
    }

  }

  render(){
    const {email, password } = this.state;

    return(
   
      <Container>
       
        <Row className="justify-content-md-center mt-5">
          <Col lg={5} md={5}>
            <Card>
              <Card.Body>
                <h2 className={'text-center pb-3'}>Login</h2>
                <>
                    <Formik
                      initialValues={{email, password}}
                      validationSchema={AuthSchema}
                      handleSubmit
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
                          <div className={'d-flex align-items-center pt-2 flex-column'}>
                            <Button variant="primary" type="submit" className={'w-100'}>
                              Submit
                            </Button>
                            <div className={'pt-2'}>
                              Don't have account please,<Link to="/signup" className={"px-5 d-inline-block"}>Signup</Link>
                            </div>
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
