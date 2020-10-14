import * as yup from "yup"

export default yup.object().shape({
    name: yup
        .string()
        .required("Must provide name")
        .min(2, "Name must be 2 or more char"),
    email: yup
        .string()
        .email("Must be a valid email address")
        .required("Must provide email"),
    password: yup
        .string()
        .required("Must provide password"),
    termsOfService: yup
        .boolean(),
})