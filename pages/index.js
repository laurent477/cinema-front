import Link from "next/link"

function Home() {
  return (
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-1/2 space-y-8">
        <div class="flex border border-gray-300 ">
          <div class="flex-1 ...">
            {" "}
            <img
              class="mx-auto h-200 w-200"
              src="http://localhost:3000/img/c-m-i.jpg"
              alt="Workflow"
            />
          </div>
          <div class="flex-1 ...">
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-400">
              BIENVENUE SUR NOTRE SITE DE CHIFFRAGE
            </h2>
            <p class="mt-3 text-center text-xl text-gray-600">
              La connaissance est nécéssaire:
            </p>
            <p class="ml-3 mt-5 "> Celui qui doute qui veut se rassurer. </p>
            <p class="ml-3 ">Celui qui regrette ne veux plus recommencer.</p>
            <p class="ml-3 "> Celui qui a du remord s'en veut à perpétuité. </p>
            <p class="ml-3 ">
              Celui qui a peur ne veut plus payer plus que le juste prix !
            </p>
            <img
              class=" mx-auto h-20 w-20"
              src="http://localhost:3000/img/clinoeil.jpg"
              alt="clinoeil"
            />
            <p class="mt-2 text-center text-sm text-gray-600">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Cliquez moi : Page d'information
              </a>
            </p>
          </div>
        </div>
        <form class="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div class="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" class="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label for="password" class="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <p>
                <a
                  href="http://localhost:3000/utilisateur/sign-up2"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Don't have an account? Create One{" "}
                </a>{" "}
              </p>

              <p>
                {" "}
                <a
                  href=""
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
