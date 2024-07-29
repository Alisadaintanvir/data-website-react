import { Plus, Bookmark, EllipsisVertical, ClipboardList, ChevronRight } from 'lucide-react';


const DashboardSection = () => {
  return (
    <section id="dashboard-section" className="bg-gray-100">
      <div className="block py-8 px-2 mx-auto">
        <div className="flex flex-col">


          <div className="block md:flex md:flex-wrap md:justify-center lg:flex lg:justify-center lg:flex-wrap xl:flex xl:justify-center gap-4">

            <div className="w-full md:w-[48%] lg:w-[49%] xl:w-[305px] bg-white border border-gray-300 rounded-md p-6 flex flex-col md:mb-0 lg:mb-0 xl:mb-4 mb-4">
              <div className="flex items-center mb-5 border-b border-gray-300 pb-5">
                <img
                  src="./md-nafis-sadik-emon-seo-expert.jpg"
                  alt=""
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-4">
                  <div className="text-sm font-semibold text-gray-400">Welcome</div>
                  <div className="text-lg font-semibold text-gray-700">
                    Md. Nafis Sadik
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-400 mb-3">
                  <span>Current plan</span>
                  <span className="font-semibold text-xs text-gray-700">Free plan</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mb-3">
                  <span>Credits</span>
                  <span className="font-semibold text-xs text-gray-700">0 <span className="font-semibold text-xs text-gray-400">/ 50</span></span>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mb-3">
                  <span>Verifications</span>
                  <span className="font-semibold text-xs text-gray-700">0 <span className="font-semibold text-xs text-gray-400">/ 100</span></span>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mb-3">
                  <span>Phone number credits</span>
                  <span className="font-semibold text-xs text-gray-700">0 <span className="font-semibold text-xs text-gray-400">/ 5</span></span>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>Next renewal</span>
                  <span className="font-semibold text-xs text-gray-700">Aug 11, 2024, 10:14 AM</span>
                </div>
                <button className="w-full h-8 text-sm text-white bg-blue-500 border tr border-transparent rounded-sm hover:bg-blue-400 transition duration-300 ease-in-out">
                  See plans
                </button>
              </div>
            </div>

            <div className="w-full md:w-[48%] lg:w-[49%] xl:w-[305px] xl:order-2 bg-white border border-gray-300 rounded-md p-6 flex flex-col md:mb-0 lg:mb-0 xl:mb-4 mb-4">
              <div className="text-lg font-medium text-gray-700 mb-4">
                Lists
              </div>
              <ul className="space-y-2">
                <li className="flex items-center justify-between group border-b border-gray-200 py-2 px-1 cursor-pointer hover:bg-gray-100">
                  <div className="flex items-center">
                  
                    <ClipboardList size={18} className="mr-2 text-gray-400" />
                    <span className='text-sm group-hover:text-blue-400'>My list</span>
                  </div>
                  <div className='flex'>
                  <span className='text-sm text-gray-400 mr-1'>2</span>
                  <EllipsisVertical size={18} className="fa-solid fa-ellipsis-vertical text-gray-400 hover:text-blue-600" />
                  </div>
                  </li>
              </ul>
            </div>

            <div className="w-full md:w-[98%] lg:w-[99%] xl:w-[610px] bg-white border border-gray-300 rounded-md p-6 flex flex-col mb-4">
            <div className="flex justify-between mb-5">
              <div className="flex items-center">
                <span className="text-lg font-medium text-gray-600 mr-4 pb-2 border-b-2 border-b-blue-400">
                  Recent search
                </span>
                <span className="text-lg font-medium text-gray-400 pb-2 hover:text-gray-600 cursor-pointer">Saved search</span>
              </div>
              <div className="flex items-center text-blue-600 text-sm hover:underline cursor-pointer">
                <a href="#" className="mr-2">
                  View all
                </a>
                <ChevronRight size={18} />
              </div>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center group justify-between border-b border-gray-200 py-2 px-1 cursor-pointer hover:bg-gray-100">
                <div>
                  <div className="font-medium text-gray-900 text-sm group-hover:text-blue-400">
                    With Emails, CEO, Owner
                  </div>
                  <div className="text-xs text-gray-600">June 12</div>
                </div>
                <div className="flex items-center text-gray-400">
                  <Bookmark size={18} className="fa-solid fa-bookmark mr-2 hover:text-blue-600"/>
                  <EllipsisVertical size={18} className="fa-solid fa-bookmark mr-2 hover:text-blue-600"/>
                </div>
              </li>
            </ul>
          </div>


          </div>


          <div className="block md-flex md:flex-wrap md:justify-center lg:flex lg:justify-center lg:flex-wrap xl:flex xl:justify-center gap-4">
          
          <div className="md:ml-2 lg:ml-0 xl:w-[925px] xl:order-4 bg-white border border-gray-300 rounded-md p-6 lg:mb-0 md:mb-4 mb-4 md:w-[98%] lg:w-[99%] ">
            <div className="flex justify-between items-center mb-4">
              <div className="text-lg font-medium text-gray-700">Usage</div>
              <div className="text-gray-600">
                <span className="bg-gray-100 rounded-sm py-1 px-2">-1</span> <span className="w-36 border border-gray-300 hover:border-blue-400 text-gray-700 text-center px-4 py-1 rounded-sm cursor-pointer text-sm"> Contacts Saved</span>
                <input
                  type="date"
                  className="ml-2 border-gray-300 hover:border-blue-400 cursor-pointer rounded-sm border py-1 px-2 text-sm"
                />
              </div>
            </div>
          </div>

          <div className="w-full md-flex md:flex-wrap md:justify-center lg:flex lg:justify-center lg:flex-wrap  xl:flex-col xl:w-[305px] xl:flex-wrap md:flex gap-4">


            <div className="w-full md:flex md:w-[48%] lg:flex lg:w-[49%] xl:w-[305px] bg-white border border-gray-300 rounded-md p-6 flex flex-col mb-4 md:mb-0 lg:mb-0">
              <div className="text-lg font-medium text-gray-700 mb-4">
                Suggested for you
              </div>
              <ul className="space-y-2">
                <li className="flex items-center justify-between group py-2 px-1 cursor-pointer hover:bg-gray-100">
                  <div className="flex items-center">
                    <img src="" alt="image" className="h-5 w-5 mr-2" />
                    <div>
                      <div className="font-medium text-sm text-gray-900 group-hover:text-blue-400">
                        Add google sheets add on
                      </div>
                      <div className="text-xs text-gray-600">
                        work faster with g-sheets
                      </div>
                    </div>
                  </div>
                  <Plus size={18} className='text-gray-500 group-hover:text-blue-400'/>
                </li>
              </ul>
            </div>

            <div className="w-full md:flex md:w-[48%] lg:w-[49%] xl:w-[305px] bg-white border border-gray-300 rounded-md p-6 flex flex-col mb-4 md:mb-0 lg:mb-0">
              <div className="text-lg font-medium text-gray-700 mb-4">
                Team
              </div>
              <div className="w-32 border border-gray-300 text-gray-700 hover:text-blue-400 hover:border-blue-500 text-center py-1 rounded-sm cursor-pointer text-sm">
                Invite members
              </div>
            </div>
          
          <div className="w-full md:flex md:w-[48%] lg:w-[49%] xl:w-[305px] bg-white border border-gray-300 rounded-md p-6 flex flex-col mb-4 lg:mb-0">
            <div className="text-lg font-medium text-gray-700 mb-4">
              Integrations
            </div>
            <ul className="space-y-2">
              <li className="flex items-center justify-between group border-b border-gray-200 py-2 px-1 cursor-pointer hover:bg-gray-100">
                <div className="flex items-center">
                  <img src="" alt="image" className="h-5 w-5 mr-2" />
                  <div>
                    <div className="font-medium group-hover:text-blue-400 text-sm text-gray-900">
                      Salesforce
                    </div>
                    <div className="text-xs text-gray-600">
                      CRM
                    </div>
                  </div>
                </div>
                <Plus size={18} className='text-gray-500 group-hover:text-blue-400'/>
              </li>
              <li className="flex items-center justify-between group border-b border-gray-200 py-2 px-1 cursor-pointer hover:bg-gray-100">
                <div className="flex items-center">
                  <img src="" alt="image" className="h-5 w-5 mr-2" />
                  <div>
                    <div className="font-medium text-sm text-gray-900 group-hover:text-blue-400">
                      Pipedrive
                    </div>
                    <div className="text-xs text-gray-600">
                      CRM
                    </div>
                  </div>
                </div>
                <Plus size={18} className='text-gray-500 group-hover:text-blue-400'/>
              </li>
              <li className="flex items-center justify-between group py-2 px-1 cursor-pointer hover:bg-gray-100">
                <div className="flex items-center">
                  <img src="" alt="image" className="h-5 w-5 mr-2" />
                  <div>
                    <div className="font-medium text-sm text-gray-900 group-hover:text-blue-400">
                      Hubspot
                    </div>
                    <div className="text-xs text-gray-600">
                      Marketing Automation
                    </div>
                  </div>
                </div>
                <Plus size={18} className='text-gray-500 group-hover:text-blue-400'/>
              </li>
              
            </ul>
          </div>

          </div>
          
          </div>

        </div>

      </div>
    </section>
  );
};

export default DashboardSection;
