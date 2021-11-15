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

          <form action="" class="mt-6">
                    <div class="my-5 text-sm">
                        <label for="username" class="block text-black">Username</label>
                        <input type="text" autofocus id="username" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Username" />
                    </div>
                    <div class="my-5 text-sm">
                        <label for="password" class="block text-black">Password</label>
                        <input type="password" id="password" class="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                        <div class="flex justify-end mt-2 text-xs text-gray-600">
                           <a href="../../pages/auth/forget_password.html hover:text-black">Forget Password?</a>
                        </div>
                    </div>

                    <button class="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>

                    <div class="grid md:grid-cols-2 gap-2 mt-7">
                    <div>
                        <button class="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
                    </div>
                    <div>
                        <button class="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">Twitter</button>
                    </div>
                    <p class="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <a href="http://localhost:3000/utilisateur/sign-up2" class="text-black font-medium"> Create One </a>  </p> 
                </div>
                </form>

        </div>
      </div>
    </div>
  )
}

export default SignUpPage
