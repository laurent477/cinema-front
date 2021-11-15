import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"

import Nav from "../../src/components/nav"

const Chiffrage = () => {
  //modifie data
  const [films, setFilms] = useState([])
  //delete data
  const handleClickDelete = useCallback(
    async (event) => {
      const id = Number(event.target.getAttribute("data-id"))

      await axios.delete(`http://localhost:4000/film/${id}`)
      setFilms(films.filter((film) => film.film_id !== id))
    },
    [films],
  )
  //modifier les donnees film
  useEffect(() => {
    ;(async () => {
      const { data } = await axios("http://localhost:4000/film")

      setFilms(data)
    })()
  }, [])
  return (
    <div class="bg-gray-300 font-family:Roboto">
      <Nav></Nav>
      <div class="px-12 pb-10">
        <div class="w-full mb-2">
          <div class="flex justify-center">
            <input
              type="text"
              placeholder="Username"
              class="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
            />
          </div>
        </div>
        <div class="w-full mb-2">
          <div class="flex justify-center">
            <input
              type="password"
              placeholder="Password"
              class="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
            />
          </div>
        </div>
        <div class="w-full mb-2 justify-center">
          <div class="flex items-center">
            <input
              type="password"
              placeholder="Password"
              class="px-8 w-full border rounded py-2 text-gray-700 focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          class="w-full mt-6 py-2 rounded bg-blue-500 text-gray-100 focus:outline-none"
        >
          Log In
        </button>
        <a
          href="#"
          class="text-sm text-opacity-100 float-right mt-6 mb-4 hover:text-blue-600 underline"
        >
          Forgot Password?
        </a>
        <a
          href="#"
          class="text-sm text-opacity-100 float-left mt-6 mb-8 hover:text-blue-600 underline"
        >
          Create Account
        </a>
      </div>
    </div>
  )
}

export default Chiffrage
