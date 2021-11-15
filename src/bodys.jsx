import classNames from "classnames"
import Link from "next/link"

const Bodys = (props) => {
  const { title, children, className } = props

  return (
    <div>
      <header>
        <h1 className="text-4xl"></h1>
        <nav>
          <div class="items-center justify-between flex bg-gray-400 bg-opacity-90 px-12 py-4 my-4 mx-auto shadow-2xl w-11/12 h-screen ">
            <div class="text-2xl text-white font-semibold inline-flex items-center">
              <span>Construction calculator</span>
            </div>
            <div>
          
            </div>
          </div>
        </nav>
        <main>

          
        </main>
      </header>
      
      <hr />
      <h2 className="p-5 text-2xl">{title}</h2>
      <div className={classNames("container p-5", className)}>{children}</div>
    </div>
  )
}

export default Bodys
