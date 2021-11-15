import { Field, Formik } from "formik"
import { useCallback } from "react"
import * as yup from "yup"
import Nav from "../../src/components/nav"
import Button from "../../src/components/Button"

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
    <div>
      <Nav></Nav>

      <div class="items-center justify-center flex bg-gray-300 bg-opacity-90 px-12 py-4 my-4 mx-auto shadow-2xl w-11/12 h-screen">
        <div class="justify-center items-center w-1/2 bg-white rounded shadow-2xl p-8 m-4 ">
          <h2 class="text-3xl font-bold mb-10 text-gray-800">
            Create Your Account
          </h2>

          <form class="space-y-5">
            <div>
              <label class="block mb-1 font-bold text-gray-500">Name</label>
              <input
                type="text"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Email</label>
              <input
                type="email"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div>
              <label class="block mb-1 font-bold text-gray-500">Password</label>
              <input
                type="password"
                class="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500"
              />
            </div>

            <div class="flex items-center">
              <input type="checkbox" id="agree" />
              <label for="agree" class="ml-2 text-gray-700 text-sm">
                I agree to the terms and privacy.
              </label>
            </div>

            <button class="block w-full bg-gray-300 hover:bg-red-300 p-4 rounded text-white-600 hover:text-white-500 transition duration-300">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
