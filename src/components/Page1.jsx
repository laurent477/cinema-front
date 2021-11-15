import classNames from "classnames"
import Link from "next/link"
import Bodys from "../bodys"

const Page = (props) => {
  const { title, children, className } = props

  return (
    <div>
      <header>
        <h1 className="text-4xl">Cinema Cinema</h1>
        <nav>
          <ul className="flex justify-around">
            <li  class="text-blue-500 hover:text-red-800">
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/films">Films</Link>
            </li>
            <li>
              <Link href="/films/new">Add new film</Link>
            </li>
            <li>
              <Link href="/cinemas">Cinema</Link>
            </li>
            <li>
              <Link href="/cinemas/new">Add new cinema</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Bodys>
        hello
      </Bodys>
      <hr />
      <h2 className="p-5 text-2xl">{title}</h2>
      <div className={classNames("container p-5", className)}>{children}</div>
    </div>
  )
}

export default Page
