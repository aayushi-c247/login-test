import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import { AuthSchema } from "../../../utilities";
import { AllAction } from '../../../redux';

const initialValues = {
  email: '',
  password: '',
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      token: null
    };
  }

  handleUserRegistration = async (data) => {
    if (data) {
      this.props.signUpUser(data);
    }
  }

  render() {

    return (
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col lg={5} md={5}>
            <Card>
              <Card.Body>
                <h2 className={'text-center pb-3'}>SignUp</h2>
                {this.state.loading ? "...Loading" :
                  <>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={AuthSchema}
                      onSubmit={(values, isValidating) => {
                        this.handleUserRegistration(values)
                      }}
                    >
                      {({
                        errors,
                        touched,
                        handleSubmit,
                        handleChange,
                        values
                      }) => (
                        <Form onSubmit={handleSubmit}>

                          <Form.Group controlId="formEmail" className={"mt-2"}>
                            <Form.Label>Email</Form.Label>
                            <Field className={"form-control"} type="email" placeholder="Email" name={"email"} onChange={handleChange} value={values.email} />
                            {errors.email && touched.email ? (
                              <p className='text-danger'>{errors.email}</p>
                            ) : null}
                          </Form.Group>

                          <Form.Group controlId="formBasicPassword1" className={"mt-2"}>
                            <Form.Label>Password</Form.Label>
                            <Field className={"form-control"} type="password" placeholder="Password" name={"password"} onChange={handleChange} value={values.password} />
                            {errors.password && touched.password ? (
                              <p className='text-danger'>{errors.password}</p>
                            ) : null}
                          </Form.Group>

                          <div className={'d-flex align-items-center pt-4 flex-column'}>
                            <Button variant="primary" type="submit" className={'w-100'}>
                              Submit
                            </Button>
                            <div className={'pt-3'}>
                              Already have account?, <Link to="/" className={"px-1 d-inline-block"}>Login</Link>
                            </div>
                          </div>
                        </Form>
                      )}
                    </Formik>

                  </>
                }
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('state in mapState', state);
  return {
    signUpState: state.appReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (userData) => {
      dispatch(AllAction.signUpUser(userData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);