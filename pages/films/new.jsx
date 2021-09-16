import { useCallback } from "react"
import { Field, Formik } from "formik"
import * as yup from "yup"

import Button from "../../src/components/Button"
import Input from "../../src/components/Input"
import Page from "../../src/components/Page"
import InputFormField from "../../src/components/InputFormField"

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
    running_time: "",
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
            <InputFormField
              name="name"
              placeholder="e.g Men in Black"
              label="Film's name"
              className="block mb-3"
            />
            <InputFormField
              name="distributor"
              placeholder="e.g Disney"
              label="Distributor's name"
              className="block mb-3"
            />
            <InputFormField
              name="running_time"
              placeholder="e.g 120"
              label="Running time"
              className="block mb-3"
              type="number"
            />
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
