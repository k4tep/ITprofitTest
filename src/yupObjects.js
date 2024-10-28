import * as yup from 'yup'

export const infoSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(
      /^[A-Za-z\d._+-]{4,20}$/,
      'firstName'
    )
    .required(
      'firstName',
    ),
  email: yup
    .string()
    .email('email')
    .required('email'),
  phone: yup
    .string()
    .matches(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      'phone',
    )
    .min(6, 'phone')
    .required(
      'phone',
    ),
  message: yup
    .string()
    .min(6, 'message')
    .required(
      'message',
    ),
})

