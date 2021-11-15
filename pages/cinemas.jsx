import { useCallback, useEffect, useState } from "react"
import axios from "axios"

import Nav from "../src/components/nav"

const CinemasPage = () => {
  const [cinemas, setCinemas] = useState([])
  const handleClickDelete = useCallback(
    async (event) => {
      const id = Number(event.target.getAttribute("data-id"))

      await axios.delete(`http://localhost:4000/cinema/${id}`)
      setCinemas(cinemas.filter((cinema) => cinema.cinema_id !== id))
    },
    [cinemas],
  )

  useEffect(() => {
    ;(async () => {
      const { data } = await axios("http://localhost:4000/cinema")

      setCinemas(data)
    })()
  }, [])
// 
  return (
    <Nav title="Films">
      <ul className="p-5">
        {cinemas.map((cinema) => (
          <li className="mb-4" key={cinema.cinema_id}>
            <p>
              <span className="font-bold">Name:</span> {cinema.name}
            </p>
            <p>
              <span className="font-bold">City:</span> {cinema.city}
            </p>
            <p>
              <span className="font-bold">Number of rooms:</span>{" "}
              {cinema.number_rooms}
            </p>
            <p>
              <button
                className="bg-red-600 text-white py-1 px-2 text-lg"
                onClick={handleClickDelete}
                data-id={cinema.cinema_id}
              >
                DELETE
              </button>
            </p>
          </li>
        ))}
      </ul>
    </Nav>
  )
}

export default CinemasPage
