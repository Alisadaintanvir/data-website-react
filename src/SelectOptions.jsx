import { ChevronDown, Lock } from 'lucide-react';


export default function SelectOptions({dropdownRef, isAdvanceVisible, handleAdvanceClick, numberPeopleValue, handlePeopleChange, numberCompanyValue, handleCompanyChange  }){
    return(
        <div
        ref={dropdownRef}
        className='select-options border absolute z-30 bg-white shadow-md top-48 left-52 w-72 font-semibold text-md'
      >
        <div className='py-2 mt-2 border-b px-4'>Select this page</div>
        <div className='py-2 border-b px-4 flex justify-between items-center'>
          <span>
            <span>Select all people </span>
            <span>(25)</span>
          </span>
          <Lock size={15}/>
        </div>
        <div onClick={handleAdvanceClick} className='pt-2 pb-3 px-4 cursor-pointer flex justify-between items-center text-blue-500'>
          <span>Advance options</span>
          <ChevronDown size={18}/>
        </div>
        {isAdvanceVisible && 
        <div className='py-2 px-4 '>
          <div className='flex justify-between items-center my-1'>
            <span>Select number of people</span>
            <input
                type="number"
                value={numberPeopleValue}
                onChange={handlePeopleChange}
                className="w-14 px-1 focus:outline-none border border-gray-300 rounded-sm focus:border-blue-500"
                min="0"  
                step="1"
              />
            
          </div>
          <div className='py-2 flex justify-between my-1'>
            <span>
              <input type='checkbox' className='mr-2' />
              <span>Select number of people</span>
            </span>

            <input
                type="number"
                value={numberCompanyValue}
                onChange={handleCompanyChange}
                className="w-14 px-1 focus:outline-none border border-gray-300 rounded-sm focus:border-blue-500"
                min="0"  
                step="1"
              />
          </div>
          <button className='bg-blue-500 mt-1 mb-2 text-white px-2 py-1 rounded-sm w-full'>Apply selection</button>
        </div>}
      </div>)
}