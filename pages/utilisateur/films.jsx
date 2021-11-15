import { useCallback, useEffect, useState } from "react"
import axios from "axios"
import Link from 'next/link'

import Nav from "../src/components/nav"

const FilmsPage = () => {
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
    <Nav title="Films">
      <ul className="p-5">
        {films.map((film) => (
          <li className="mb-4" key={film.film_id}>
            <p className="font-bold">Name: {film.name}</p>
            <p>Duration {film.running_time}min.</p>
            <p>Language {film.language}</p>
            <p>Original Language {film.originalLanguage}</p>
            <p>
              
              <button // button delete information 
                className="bg-red-600 text-white py-1 px-2 text-lg" //la classe du bouton 
                onClick={handleClickDelete}                         //sur le click supprimer les donnees
                data-id={film.film_id}                              //recuperer les données de film_id dans data id
              >
                DELETE
              </button>
            </p>
          </li>
        ))}
      </ul>
      <ul class="flex">
      <li>
        <Link href="./">
          <a  class="text-blue-500 hover:text-blue-800">click Home</a>
        </Link>
      </li>
      <li>
        <Link href="./cinemas">
          <a>click Cinema</a>
        </Link>
      </li>
      <li>
        <Link href="./films">
          <a>click films</a>
        </Link>
        <Link href="./sign-up2">
          <a>click new</a>
        </Link>
      </li>
    </ul>
    </Nav>
  )
}

export default FilmsPage
