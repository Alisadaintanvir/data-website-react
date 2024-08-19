import {  RotateCcw } from 'lucide-react';
import React from 'react';


const LayoutDown = React.forwardRef((props, ref) => (

        <div ref={ref} className='layout-down absolute z-30 top-[158px] border left-[1015px] bg-white w-[210px] shadow-md'>
          <div className='border-b py-3 px-4 flex items-center text-blue-500'><RotateCcw size={16} className='mr-1'/><span className='font-semibold'>Reset by default</span></div>
          <div className='pt-1 pb-2 px-4 h-40 overflow-y-scroll'>
            <div className='flex items-center py-2 cursor-pointer'>
              <input type="checkbox" />
              <span className='ml-2 font-semibold'>Employees</span> 
            </div>
            <div className='flex items-center py-2'>
              <input type="checkbox" />
              <span className='ml-2 font-semibold'>City</span> 
            </div>
            <div className='flex items-center py-2'>
              <input type="checkbox" />
              <span className='ml-2 font-semibold'>Country</span> 
            </div>
            
            <div className='flex items-center py-2'>
              <input type="checkbox" />
              <span className='ml-2 font-semibold'>Password</span> 
            </div>
            
            <div className='flex items-center py-2'>
              <input type="checkbox" />
              <span className='ml-2 font-semibold'>Company</span> 
            </div>
            
            
            
          </div>

        </div>
            
    ));

    LayoutDown.displayName = 'LayoutDown';
    
    export default LayoutDown;