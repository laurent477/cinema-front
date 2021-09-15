import Link from "next/link"

const Page = (props) => {
  const { title, children } = props

  return (
    <div>
      <header>
        <h1 className="text-4xl">Cinema Cinema</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/films">Films</Link>
            </li>
            <li>
              <Link href="/cinemas">Cinema</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <h2 className="text-2xl">{title}</h2>
      {children}
    </div>
  )
}

export default Page
