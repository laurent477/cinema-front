import axios from "axios"
import { Formik } from "formik"
import { useCallback } from "react"
import * as yup from "yup"

import Button from "../src/components/Button"
import InputFormField from "../src/components/InputFormField"
import Page from "../src/components/Page"

const validationSchema = yup.object().shape({
  email: yup.string().email().required("E-mail is required.").label("E-mail"),
  password: yup
    .string()
    .required("Password is required.")
    .matches(
      /[\w$#!-]{8,}/,
      "Password must be at least 8 chars and contain only alphanumeric and $, #, ! characters.",
    )
    .label("Password"),
})
const IndexPage = () => {
  const handleFormSubmit = useCallback(async (values, actions) => {
    try {
      await axios.post("http://localhost:4000/sign-up", {
        email: values.email,
        password: values.password,
      })
      actions.resetForm()
    } catch (err) {
      actions.setErrors({ form: "Oops, something went wrong" })
    }
  }, [])
  const initialValues = { email: "", password: "" }

  return (
    <Page title="Home" className="p-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit, errors: { form: formError } }) => (
          <form onSubmit={handleSubmit}>
            {formError ? <h1>{formError}</h1> : null}
            <InputFormField
              name="email"
              type="email"
              placeholder="e.g john@smith.com"
              label="E-mail"
              className="block mb-3"
            />
            <InputFormField
              name="password"
              type="password"
              placeholder="**************"
              label="Password"
              className="block mb-3"
            />
            <Button type="submit" className="block mb-3">
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </Page>
  )
}

export default IndexPage
