import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Card, } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import { SignupSchema, Toast } from "../../../utilities";
import { AllAction } from '../../../redux';


const initialValues = {
  email: '',
  password: '',
}

class Singup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      token: null
    };
  }

  handleUserRegistration = async (data) => {
    console.log(data, "values")
    if (data) {
      this.props.singupUser(data);
    }
  }

  render() {


    return (
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col lg={5} md={5}>
            <Card>
              <Card.Body>
                <h2>Singup</h2>
                {this.state.loading ? "...Loading" :
                  <>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={SignupSchema}
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

                          <div className={'d-lfex pt-4'}>
                            <Button variant="primary" type="submit">
                              Submit
                            </Button>
                            <Link to="/" className={"px-5 d-inline-block"}>Login</Link>
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
    singupState: state.appReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    singupUser: (userData) => {
      dispatch(AllAction.singupUser(userData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Singup);