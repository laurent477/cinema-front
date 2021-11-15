import { Field, Formik } from "formik"
import { useCallback } from "react"
import * as yup from "yup"

import Nav from "../src/components/nav"
import Button from "../src/components/Button"

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label("E-mail"),
  password: yup.string().min(8).required().label("Password"),
})
const SignUpPage = () => {
  const initialValues = {
    email: "",
    password: "",
  }
  const handleFormSubmit = useCallback((values) => {
    console.log("SUBMITTED", values)
  }, [])

  return (
    <Nav title="Sign Up">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field as="input" name="email" className="border-2" type="email" />
            <Field
              as="input"
              name="password"
              className="border-2"
              type="password"
            />
            <Button type="submit" className="block mt-3">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Nav>
  )
}

export default SignUpPage
