import { Field, Formik } from "formik"
import { useCallback } from "react"
import * as yup from "yup"

import Button from "../../src/components/Button"
import FormField from "../../src/components/FormField"
import Input from "../../src/components/Input"
import Nav from "../../src/components/nav"
import Page from "../../src/components/Page"

const validationSchema = yup.object().shape({
  name: yup.string().min(1).max(120).required(),
  city: yup.string().min(1).max(120).required(),
  number_seats: yup.number().positive().integer().required(),
})
const CinemasNewPage = () => {
  const initialValues = {
    name: "",
    city: "",
    number_seats: "0",
  }
  const handleFormSubmit = useCallback((values) => {
    console.log(values)
  }, [])

  return (
    <Nav title="Add a new cinema">
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <p>
              <FormField
                as={Input}
                name="name"
                placeholder="e.g La lumière verte"
                minLength="1"
                maxLength="120"
              />
            </p>
            <p>
              <FormField
                as={Input}
                name="city"
                placeholder="e.g Paris"
                minLength="1"
                maxLength="120"
              />
            </p>
            <p>
              <FormField
                as={Input}
                name="number_seats"
                placeholder="e.g 100"
                min="1"
                type="number"
              />
            </p>
            <p>
              <FormField
                as={Input}
                name="number_seats"
                placeholder="e.g 100"
                min="1"
                type="number"
              />
            </p>
            <p>
              <FormField
                as={Input}
                name="number_seats"
                placeholder="e.g 100"
                min="1"
                type="number"
              />
            </p>
            <p>
              <FormField
                as={Input}
                name="number_seats"
                placeholder="e.g 100"
                min="1"
                type="number"
              />
            </p>
            <p>
              <Button type="submit">Submit</Button>
            </p>
          </form>
        )}
      </Formik>
    </Nav>
  )
}

export default CinemasNewPage
