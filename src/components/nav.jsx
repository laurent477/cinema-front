import classNames from "classnames"
import Link from "next/link"

const Nav = (props) => {
  const { title, children, className } = props

  return (
    <div>
      <header>
        <h1 className="text-4xl"></h1>
        <nav>
          <div class="items-center justify-between flex bg-gray-400 bg-opacity-90 px-12 py-4 my-4 mx-auto shadow-2xl w-11/12">
            <div class="text-2xl text-white font-semibold inline-flex items-center">
              <span>Construction calculator</span>
            </div>
            <div>
              <ul class="flex text-white">
                <li class="ml-5 px-2 py-1">
                  <a href="http://localhost:3000/utilisateur/">Home</a>
                </li>
                <li class="ml-5 px-2 py-1">
                  <a href="http://localhost:3000/utilisateur/contact_us">Contact</a>
                </li>
                <li class="ml-5 px-2 py-1">
                  <a href="http://localhost:3000/utilisateur/faq">Faq</a>
                </li>
                <li class="ml-5 px-2 py-1">
                  <a href="../films">Films</a>
                </li>
                <li class="ml-5 px-2 py-1">
                  <a href="http://localhost:3000/films/new">Add new film</a>
                </li>
                <li class="ml-5 px-2 py-1">
                  <a href="../cinemas">Cinema</a>
                </li>
                <div>
                <input type="text" class="w-full px-4 py-3 mx-4 leading-tight text-sm text-gray-400 bg-gray-500 rounded placeholder-gray-200 focus:outline-none focus:shadow-outline" placeholder="search"/>
                </div>
                <li class="ml-5 px-3 py-1 rounded font-semibold bg-gray-100 text-gray-800">
                  <a href="http://localhost:3000/utilisateur/sign-in">Professionel</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
      </header>
      
      <hr />
      <h2 className="p-5 text-2xl">{title}</h2>
      <div className={classNames("container p-5", className)}>{children}</div>
    </div>
  )
}

export default Nav
