import {useState} from 'react';
import { GoTriangleLeft, GoTriangleDown, GoTriangleRight } from "react-icons/go";

export default function Pagination(){
    const [page, setPage] = useState(1);

    const handlePageChange = (e) => {
      setPage(e.target.value);
    };

    return(
        <div className="mt-4 flex space-x-1 justify-center items-center text-gray-700">
              <span className="cursor-pointer p-1 px-2 py-1 bg-white text-center hover:text-sky-500 border hover:border-sky-500 rounded-sm transition-colors duration-300"><GoTriangleLeft className='text-lg' /></span>
              <span className="flex border rounded-sm bg-white items-center hover:border-sky-500 transition-colors duration-300"><input className="w-8 py-[3px] px-2 rounded-md" type="text" value={page}
              onChange={handlePageChange} /><GoTriangleDown className='text-lg w-8 cursor-pointer' /></span>
              <span className="cursor-pointer p-1 px-2 py-1 bg-white text-center hover:text-sky-500 border hover:border-sky-500 rounded-sm transition-colors duration-300"><GoTriangleRight className='text-lg' /></span>

        </div>
    )
}