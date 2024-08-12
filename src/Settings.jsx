import { useState } from 'react';
import { Image, AlignJustify } from 'lucide-react';

function Settings() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <section className=" block lg:flex lg:flex-col bg-gray-100">
      <nav className=" bg-white p-3 border-b border-b-gray-300 ">
        <button
          className="text-gray-900 font-normal ml-5 text-2xl "
          onClick={() => setShowMenu(!showMenu)}
        >
          Settings
        </button>
      </nav>

      <div className="flex flex-col sm:flex-row lg:mx-32 sm:mt-4 mb-4">
      <div className='bg-white sm:hidden flex justify-between items-center h-14 px-4'><div>Your preferences</div><AlignJustify/></div>
          <div className="w-52">
          
            <div>
              
              <div className='px-3 flex items-center h-11 text-sm cursor-pointer rounded-sm text-md font-semibold text-gray-700 hover:bg-blue-100 hover:text-blue-400 transition duration-300 ease-out hover:ease-out'>Basic info</div>
              <div className='px-3 flex items-center h-11 text-sm cursor-pointer rounded-sm text-md font-semibold text-gray-700 hover:bg-blue-100 hover:text-blue-400 transition duration-300 ease-out hover:ease-out'>Plan & Billings</div>
              {/* Add more filter options as needed */}
            </div>
          </div>
      

        <div className="flex-grow bg-white ml-4 mr-4 lg:mr-0">
          <div >
            <h2 className="text-xl font-medium text-gray-700 px-4 py-5">Basic info</h2>
            <div className="border-t border-gray-300 py-6 px-4">
              <div className="flex items-center">
                <div>
                  <Image className="h-20 w-20 rounded-full text-gray-200" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-700">
                    Profile photo
                  </div>
                  <div className="mb-2 text-sm text-gray-600">
                    Photo should be at least 300px × 300px
                  </div>
                  <div>
                    <button className="bg-gray-100 border border-gray-300 text-gray-800 hover:text-blue-500 hover:border-blue-500 hover:bg-white transition duration-300 ease-out hover:ease-out px-3 py-1 rounded text-sm">
                      Upload photo
                    </button>
                    <button className="ml-2 text-red-600 bg-white border border-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-out hover:ease-out px-3 py-1 rounded text-sm">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div  className='w-4/6'>
                <div className="flex mt-4 ">
                  <div className="mr-6 flex-grow">
                    <div className="mb-1 mt-2 text-gray-700 text-sm">
                      First name
                    </div>
                    <input
                      className="w-full h-10 rounded border border-gray-300 hover:border hover:border-blue-500 focus:outline-none focus:border-blue-400 focus:ring-sblue-400 focus:shadow-sm"
                      type="text"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="mb-1 mt-2 text-gray-700 text-sm">
                      Last name
                    </div>
                    <input
                      className="w-full h-10 rounded border border-gray-300 hover:border-blue-500 focus:outline-none focus:border-blue-400 focus:ring-sblue-400 focus:shadow-sm"
                      type="text"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-1 mt-2 text-gray-700 text-sm">Email</div>
                  <input
                    className="w-full h-10 rounded border border-gray-300 hover:border-blue-500 focus:outline-none focus:border-blue-400 focus:ring-sblue-400 focus:shadow-sm"
                    type="text"
                  />
                </div>

                <div className="mt-4">
                  <div className="mb-1 mt-2 text-gray-700 text-sm">
                    Phone number
                  </div>
                  <input
                    className="w-full h-10 rounded border border-gray-300 hover:border-blue-500 focus:outline-none focus:border-blue-400 focus:ring-sblue-400 focus:shadow-sm"
                    type="text"
                  />
                </div>

                <div className="mt-4">
                  <div className="mb-1 mt-2 text-gray-700 text-sm ">
                    Time zone
                  </div>
                  <input
                    className="w-full h-10 rounded border border-gray-300 hover:border-blue-500 focus:outline-none focus:border-blue-400 focus:ring-sblue-400 focus:shadow-sm"
                    type="text"
                  />
                </div>
                <button className="mt-5 h-10 w-28 text-white bg-blue-500 hover:bg-blue-400 transition duration-300 ease-in hover:ease-out rounded font-medium">
                  Save
                </button>
              </div>
            </div>
            <div className="border-t border-gray-300 py-5 px-4">
              <div className="cursor-pointer text-blue-600 text-sm">Delete account</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
