import * as yup from 'yup'
const validationSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
})
export default validationSchema
