import { Field } from "formik"

const InputFormField = (props) => {
  const { label, name, className, ...otherProps } = props

  return (
    <label className={className}>
      <span className="text-lg font-bold block">{label}</span>
      <Field name={name}>
        {({ field, meta: { error, touched } }) => (
          <>
            <input
              className="border-2 px-2 py-1.5"
              {...field}
              {...otherProps}
            />
            {touched && error ? (
              <span className="block mt-1 text-red-600 font-bold">{error}</span>
            ) : null}
          </>
        )}
      </Field>
    </label>
  )
}

export default InputFormField
