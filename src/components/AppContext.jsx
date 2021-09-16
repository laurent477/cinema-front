import axios from "axios"
import { createContext, useEffect, useState } from "react"

const AppContext = createContext()

export const AppContextProvider = (props) => {
  const [languages, setLanguages] = useState([])

  useEffect(() => {
    ;(async () => {
      const { data } = await axios("http://localhost:4000/language")

      setLanguages(data)
    })()
  }, [])

  return <AppContext.Provider {...props} value={{ languages }} />
}

export default AppContext
