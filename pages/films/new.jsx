import { useCallback } from "react"
import { Formik } from "formik"
import * as yup from "yup"

import Button from "../../src/components/Button"
import Input from "../../src/components/Input"
import Nav from "../../src/components/nav"
import FormField from "../../src/components/FormField"
import LanguageSelector from "../../src/components/LanguageSelector"

// =========== definir les types des deifferent variables=============
const validationSchema = yup.object().shape({
  name: yup.string().required().min(1).max(120),
  distributor: yup.string().required().min(1).max(120),
  running_time: yup.number().integer().min(1).required(),
  budget: yup.number().integer().positive().required(),
  language_id: yup.number().integer().min(1).required(),
  original_language_id: yup.number().integer().min(1).required(),
})
//============initiaaliser les valeur des variable=================

const FilmsNewPage = () => {
  const initialValues = {
    name: "",
    distributor: "",
    running_time: "",
    budget: "",
    language_id: "",
    original_language_id: "",
  }
  // ======afficher les valeur appelle a la fonction handeformsubmit============
  const handleFormSubmit = useCallback((values) => {
    console.log(values)
  }, [])

  //a
  return (
    <Nav title="Add a new film">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormField
              as={Input}
              name="name"
              placeholder="e.g Men in Black"
              label="Film's name"
              className="block mb-3"
              minLength="1"
            />
            <FormField
              as={Input}
              name="distributor"
              placeholder="e.g Disney"
              label="Distributor's name"
              className="block mb-3"
              minLength="1"
            />
            <FormField
              as={Input}
              name="running_time"
              placeholder="e.g 120"
              label="Running time"
              className="block mb-3"
              type="number"
              min="0"
            />
            <FormField
              as={Input}
              name="budget"
              placeholder="e.g 10000000"
              label="Budget"
              className="block mb-3"
              type="number"
              min="0"
            />
            <FormField
              as={LanguageSelector}
              name="language_id"
              label="Language"
              className="block mb-3"
            />
            <FormField
              as={LanguageSelector}
              name="original_language_id"
              label="Original Language"
              className="block mb-3"
            />
            <p>
              <Button type="submit">Submit</Button>
            </p>
          </form>
        )}
      </Formik>
    </Nav>
  )
}

export default FilmsNewPage
