import { useCallback, useEffect, useState } from "react"
import axios from "axios"

import Page from "../src/components/Page"

const FilmsPage = () => {
  const [films, setFilms] = useState([])
  const handleClickDelete = useCallback(
    async (event) => {
      const id = Number(event.target.getAttribute("data-id"))

      await axios.delete(`http://localhost:4000/film/${id}`)
      setFilms(films.filter((film) => film.film_id !== id))
    },
    [films],
  )

  useEffect(() => {
    ;(async () => {
      const { data } = await axios("http://localhost:4000/film")

      setFilms(data)
    })()
  }, [])

  return (
    <Page title="Films">
      <ul className="p-5">
        {films.map((film) => (
          <li className="mb-4" key={film.film_id}>
            <p className="font-bold">Name: {film.name}</p>
            <p>Duration {film.running_time}min.</p>
            <p>Language {film.language}</p>
            <p>Original Language {film.originalLanguage}</p>
            <p>
              <button
                className="bg-red-600 text-white py-1 px-2 text-lg"
                onClick={handleClickDelete}
                data-id={film.film_id}
              >
                DELETE
              </button>
            </p>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export default FilmsPage
