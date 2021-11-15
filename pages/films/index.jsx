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
    <div>
    <Nav class="flex justify-center  h-screen w-full bg-gray-300">  </Nav>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div class="flex items-center justify-center bg-gray-300 bg-opacity-90 px-12 py-4 my-4 mx-auto shadow-2xl w-11/12 h-screen">
              <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">
                  Register
                </h1>
                <form action="/" method="post">
                  <div class="flex flex-col mb-4">
                    <label
                      class="mb-2 font-bold text-lg text-gray-900"
                      for="first_name"
                    >
                      Film's name
                    </label>
                    <input
                      class="border py-2 px-3 text-grey-800"
                      type="text"
                      name="first_name"
                      id="first_name"
                    />
                  </div>
                  <div class="flex flex-col mb-4">
                    <label
                      class="mb-2 font-bold text-lg text-gray-900"
                      for="last_name"
                    >
                      Distributor's name
                    </label>
                    <input
                      class="border py-2 px-3 text-grey-800"
                      type="text"
                      name="last_name"
                      id="last_name"
                    />
                  </div>
                  <div class="flex flex-col mb-4">
                    <label
                      class="mb-2 font-bold text-lg text-gray-900"
                      for="email"
                    >
                      running_time
                    </label>
                    <input
                      class="border py-2 px-3 text-grey-800"
                      type="email"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div class="flex flex-col mb-4">
                    <label
                      class="mb-2 font-bold text-lg text-gray-900"
                      for="password"
                    >
                      budget
                    </label>
                    <input
                      class="border py-2 px-3 text-grey-800"
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                  <button
                    class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded"
                    type="submit"
                  >
                    Create Account
                  </button>
                </form>
                <a
                  class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900"
                  href="/login"
                >
                  Already have an account?
                </a>
              </div>
            </div>
          </form>
        )}
      </Formik>
  </div>
  )
}

export default FilmsNewPage
