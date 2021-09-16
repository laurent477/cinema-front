import { useContext } from "react"

import AppContext from "./AppContext"
import Select from "./Select"

const LanguageSelector = (props) => {
  const { languages } = useContext(AppContext)

  return (
    <Select {...props}>
      {languages.map(({ language_id, name }) => (
        <option key={language_id} value={language_id}>
          {name}
        </option>
      ))}
    </Select>
  )
}

export default LanguageSelector
