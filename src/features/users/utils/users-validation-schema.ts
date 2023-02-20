import * as yup from 'yup'

export const usersValidationSchema = {
  createUser: yup.object({
    username: yup.string().required('requiredUsername'),
    firstname: yup.string().required('requiredFirstname'),
    lastname: yup.string().required('requiredLastname'),
    email: yup.string().email('mustBeValidEmail').required('requiredEmail'),
    password: yup.string().required('requiredPassword'),
    confirmPassword: yup.string().trim().oneOf([yup.ref('password'), null], 'passwordsMustMatch')
      .required('requiredConfirmation')
  })
}
