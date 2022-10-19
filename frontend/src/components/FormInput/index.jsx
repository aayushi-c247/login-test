import { Field } from 'formik';
import { Form } from "react-bootstrap";

const FormInput = ({
  type, 
  placeholder, 
  name, 
  values, 
  handleChange, 
  id, 
  label, 
  errors,
  field,
  form
}) => {
  const error = "form.error";
  const touched = "form.error";

  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      {/* <Field
        type={type}
        placeholder={placeholder}
        name={name}
        value={field.value || ""}
        onChange={handleChange}
        className={"form-control"}
        id={id}
      />
      {error && touched ? (
        <p className='text-danger'>{errors}</p>
      ) : null} */}
      <Field name={name}>
        {({
          field, // { name, value, onChange, onBlur }
          form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
          meta,
        }) => (
          <div>
            <input type="text" placeholder={placeholder} {...field} />
            {meta.touched && meta.error && (
              <div className="error">{meta.error}</div>
            )}
          </div>
        )}
        </Field>
    </Form.Group>
  )
}




export default FormInput;