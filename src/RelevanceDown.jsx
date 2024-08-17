import { ChevronDown } from 'lucide-react';
import React from 'react';


const RelevanceDown = React.forwardRef((props, ref) => (

        <div ref={ref} className='layout-down absolute z-30 top-[200px] border left-[1160px] bg-white w-[180px] shadow-md p-4'>
          
        <div className='mb-1'>sort by...</div>
        <div className='border border-gray-300 cursor-pointer hover:border-blue-500 flex justify-between items-center font-semibold px-2 py-[2px] rounded-sm mb-2'><span>Relevance</span><ChevronDown size={16}/></div>
        <div className='border border-gray-300 cursor-pointer hover:border-blue-500 flex justify-between items-center font-semibold px-2 py-[2px] rounded-sm mb-2'><span>Descending</span><ChevronDown size={16}/></div>
        <button className='bg-blue-500 hover:bg-blue-600 text-white w-full text-center font-semibold px-2 py-[2px] rounded-sm'>Apply</button>
        </div>
            
    ));

    RelevanceDown.displayName = 'RelevanceDown';
    
    export default RelevanceDown;