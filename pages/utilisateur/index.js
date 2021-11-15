import Nav from "../../src/components/nav"
import Link from "next/link"

const IndexPage = () => {
  return (
    <div>
      <Nav className="p-4"></Nav>
      
      <div class="items-center justify-between flex bg-gray-300 bg-opacity-90 px-12 py-4 my-4 mx-auto shadow-2xl w-11/12 h-screen">
      <div class="class=h-48 flex flex-wrap content-center ...">
      <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text"  placeholder="first_name" name="first_name" id="first_name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
  <div class="flex items-center mt-2 mb-6">
                <label class="text-gray-600 font-light">Input with Icons</label>

    <svg class="w-4 h-4 fill-current text-gray-500 ml-4 z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    <input type='text' placeholder="Enter your input here" class="w-full -ml-8 pl-10 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"/>
</div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" name="last_name" id="last_name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
  
                <div class="col-span-6 sm:col-span-4">
                  <label for="email_address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email_address" id="email_address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
  
                <div class="col-span-6 sm:col-span-3">
                  <label for="country" class="block text-sm font-medium text-gray-700">Country / Region</label>
                  <select id="country" name="country" autocomplete="country" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
  
                <div class="col-span-6">
                  <label for="street_address" class="block text-sm font-medium text-gray-700">Street address</label>
                  <input type="text" name="street_address" id="street_address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
  
                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" name="city" id="city" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
  
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="state" class="block text-sm font-medium text-gray-700">State / Province</label>
                  <input type="text" name="state" id="state" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
  
                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="postal_code" class="block text-sm font-medium text-gray-700">ZIP / Postal</label>
                  <input type="text" name="postal_code" id="postal_code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
