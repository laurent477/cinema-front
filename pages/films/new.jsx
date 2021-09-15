import { useCallback } from "react"
import { Field, Formik } from "formik"
import * as yup from "yup"

import Button from "../../src/components/Button"
import Input from "../../src/components/Input"
import Page from "../../src/components/Page"

const validationSchema = yup.object().shape({
  name: yup.string().required().min(1).max(120),
  distributor: yup.string().required().min(1).max(120),
  running_time: yup.number().integer().min(1).required(),
  budget: yup.number().integer().positive().required(),
})
const FilmsNewPage = () => {
  const initialValues = {
    name: "",
    distributor: "",
    running_time: 220,
    budget: "",
  }
  const handleFormSubmit = useCallback((values) => {
    console.log(values)
  }, [])

  return (
    <Page title="Add a new film">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="name">
              {({ field, meta }) => (
                <p>
                  <Input {...field} placeholder="Name" />
                  <span className="block text-red-600 font-bold">
                    {meta.touched && meta.error ? meta.error : null}
                  </span>
                </p>
              )}
            </Field>
            <p>
              <Field name="distributor">
                {({ field }) => <Input {...field} placeholder="Distributor" />}
              </Field>
            </p>
            <p>
              <Field name="running_time">
                {({ field }) => (
                  <Input {...field} placeholder="Running time" type="number" />
                )}
              </Field>
            </p>
            <p>
              <Field name="budget">
                {({ field }) => (
                  <Input {...field} placeholder="Budget" type="number" />
                )}
              </Field>
            </p>
            <p>
              <Button type="submit">Submit</Button>
            </p>
          </form>
        )}
      </Formik>
    </Page>
  )
}

export default FilmsNewPage
