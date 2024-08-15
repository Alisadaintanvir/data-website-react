import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CircleOff, X, Plus, Minus, Calendar } from 'lucide-react';

const YearFilter = ({
  includedOptions,
  excludedOptions,
  visibleSection,
  toggleVisibility,
  toggleOption,
  removeOption,
  handleYearSelection,
  yearFrom,
  yearTo
}) => {
  return (
    <div className="group">
      <div className="border border-gray-100">
        <div
          className="filter-option flex justify-between items-center p-3 text-[#071427] bg-white rounded cursor-pointer"
          onClick={() => toggleVisibility('year')}
        >
          <span className="flex items-center">
            <Calendar size={18} className="mr-3 text-blue-600" />
            Year
          </span>
          <div className='flex '>
            {includedOptions.year.length > 0 && (
              <span className='counter-year border border-gray-300 rounded-sm h-5 mr-2 text-gray-500'>
                <span className='flex items-center ml-1'>
                  <span className='text-[12px]'>{includedOptions.year.length}</span>
                  <X size={14} className="ml-1 cursor-pointer" onClick={() => removeOption('year', '')} />
                </span>
              </span>
            )}
            {visibleSection === 'year' ? (
              <ChevronUp
                size={18}
                className="group-hover:bg-blue-50 rounded-full group-hover:text-blue-600 transition duration-200"
              />
            ) : (
              <ChevronDown
                size={18}
                className="group-hover:bg-blue-50 rounded-full group-hover:text-blue-600 transition duration-200"
              />
            )}
          </div>
        </div>

        {includedOptions.year.length > 0 && (
          <div className="included text-xs font-normal pl-4 pb-4 bg-white">
            <div className="mb-2">Included:</div>
            <div className="flex flex-wrap">
              {includedOptions.year.map((option) => (
                <div
                  key={option}
                  className="font-medium p-1 rounded-sm text-white bg-blue-400 flex items-center mr-2 mb-2"
                >
                  <span>{option}</span>
                  <CircleOff size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('year', option, false)} />
                  <X size={13} className="ml-1 cursor-pointer" onClick={() => {
                    removeOption('year', option);
                    toggleVisibility('year');
                  }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {excludedOptions.year.length > 0 && (
          <div className="excluded text-xs font-normal pl-4 pb-4 bg-white">
            <div className="mb-2">Excluded:</div>
            <div className="flex flex-wrap">
              {excludedOptions.year.map((option) => (
                <div
                  key={option}
                  className="font-medium p-1 rounded-sm text-white bg-red-400 flex items-center mr-2 mb-2"
                >
                  <span>{option}</span>
                  <Plus size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('year', option, true)} />
                  <X size={13} className="ml-1 cursor-pointer" onClick={() => {
                    removeOption('year', option);
                    toggleVisibility('year');
                  }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {visibleSection === 'year' && (
          <div id="lead-year-results" className="search-results shadow-md left-7 bg-white p-4 border">
            <div className="year-selectors mb-2 flex justify-between px-2">
              <select
                className="w-20 text-xs font-bold py-1 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-400"
                onChange={(e) => handleYearSelection(e.target.value, 'from')}
                value={yearFrom || ''}
              >
                <option value="">From</option>
                {['2020', '2021', '2022', '2023', '2024'].map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>

              <Minus className='text-gray-400'/>
              
              <select
                className='w-20 py-1 text-xs font-bold border border-gray-300 rounded-sm focus:outline-none focus:border-blue-400'
                onChange={(e) => handleYearSelection(e.target.value, 'to')}
                value={yearTo || ''} 
              >
                <option value="">To</option>
                {['2020', '2021', '2022', '2023', '2024'].map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YearFilter;
