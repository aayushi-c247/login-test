import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()

    // Format Validation
    .email("Invalid email address format")

    // Required Field Validation
    .required("Email is required"),
  password: Yup.string()

    //Minimum Character Validation
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required")
});

export const SignupSchema = Yup.object().shape({
 
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});