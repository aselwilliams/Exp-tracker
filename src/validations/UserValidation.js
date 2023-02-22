import * as yup from 'yup';

export const registerSchema = yup.object({
    username: yup.string('Enter your username').required('Username is required'),
    password: yup.string('Enter your password').min(6, 'Password should be minimum 8 characters long').required('Password is required'),
    firstName: yup.string('Enter your first name').required('First name is required'),
    lastName: yup.string('Enter your last name').required('Last name is required'),
    image: yup.string('Enter your image url').required('Image is required'),
})

export const loginSchema = yup.object({
    username: yup.string('Enter your username').required('Username is required'),
    password: yup.string('Enter your password').min(6, 'Password should be minimum 8 characters long').required('Password is required'),
})