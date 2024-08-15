import { useState, useEffect, useRef } from 'react';
import { MapPin, ChevronDown, ChevronUp, CircleOff, X, Plus,UserRoundSearch, CircleArrowOutUpLeft, Calendar, Minus } from 'lucide-react';



const LeadSearchFilter = () => {
  const [includedOptions, setIncludedOptions] = useState({
    country: [],
    name: [],
    gender: [],
    year: [],
  });

  const [excludedOptions, setExcludedOptions] = useState({
    country: [],
    name: [],
    gender: [],
    year: [],
  });

  const [visibleSection, setVisibleSection] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const filterRef = useRef(null);

  const removeOption = (section, option) => {
    setIncludedOptions((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item !== option),
    }));
    setExcludedOptions((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item !== option),
    }));
  };

  const clearAllOptions = () => {
    setIncludedOptions({
      country: [],
      name: [],
      gender: [],
      year: [],
    });
    setExcludedOptions({
      country: [],
      name: [],
      gender: [],
      year: [],
    });
  };

  const toggleOption = (section, option, isExcluded) => {
    if (isExcluded) {
      setIncludedOptions((prev) => ({
        ...prev,
        [section]: [...prev[section], option],
      }));
      setExcludedOptions((prev) => ({
        ...prev,
        [section]: prev[section].filter((item) => item !== option),
      }));
    } else {
      setIncludedOptions((prev) => ({
        ...prev,
        [section]: prev[section].filter((item) => item !== option),
      }));
      setExcludedOptions((prev) => ({
        ...prev,
        [section]: [...prev[section], option],
      }));
    }
  };

  const toggleVisibility = (section) => {
    setVisibleSection((prev) => (prev === section ? null : section));
  };

  const handleCheckboxChange = (section, option, isChecked) => {
    if (isChecked) {
      setIncludedOptions((prev) => ({
        ...prev,
        [section]: [...prev[section], option],
      }));
    } else {
      setIncludedOptions((prev) => ({
        ...prev,
        [section]: prev[section].filter((item) => item !== option),
      }));
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchInputKeyPress = (event, section) => {
    if (event.key === 'Enter' && searchInput.trim()) {
      const option = searchInput.trim();
      setIncludedOptions((prev) => ({
        ...prev,
        [section]: [...prev[section], option],
      }));
      setSearchInput(''); // Clear the input field
    }
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setVisibleSection(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getCount = (section) => includedOptions[section].length;

  // Calculate total number of filters applied
  const totalFiltersApplied = Object.values(includedOptions).flat().length;

  {/*Year Option Functions*/}

  const selectYearRange = (fromYear, toYear) => {
    setIncludedOptions((prev) => ({
      ...prev,
      year: fromYear && toYear ? [`${fromYear}-${toYear}`] : [],
    }));
  };

  const [yearFrom, setYearFrom] = useState(null);
  const [yearTo, setYearTo] = useState(null);

  const handleYearSelection = (year, type) => {
    if (type === 'from') {
      setYearFrom(year);
      selectYearRange(year, yearTo);
    } else {
      setYearTo(year);
      selectYearRange(yearFrom, year);
    }
  };
  

  return (
    <section id="lead-section" className="lead-section ml-3 mt-3" ref={filterRef}>
      <div id="lead-section-div" className="lead-section-div">
        <div className="left-lead-section w-72 h-[480px] overflow-y-scroll">
          <div className="filter-title flex justify-between items-baseline p-4 bg-white border-b border-gray-100 text-[#071427] font-semibold">
            <span className='text-xl'>Filter</span>

            <div>
            <span 
              className="clear-filters text-xs font-medium hover:text-blue-500 hover:underline cursor-pointer"
              onClick={clearAllOptions} 
            >
              <span>Clear all</span>
              {totalFiltersApplied > 0 && (
                <span className='filter-count ml-1'>({totalFiltersApplied})</span>
              )}
            </span>
            <span 
            className="clear-filters ml-3 text-xs font-medium hover:text-blue-500 hover:underline cursor-pointer"

          >
            Save all
          </span>
          </div>


          </div>
          <div className="filter-options font-medium mb-5">
            {/* Country Option */}
            <div className="group">
              <div className="border border-gray-100">
                <div
                  className="filter-option flex justify-between items-center p-3 text-[#071427] bg-white rounded cursor-pointer"
                  onClick={() => toggleVisibility('country')}
                >
                  <span className="flex items-center">
                    <MapPin size={18} className="mr-3 text-blue-600" />
                    Country
                  </span>
                  <div className='flex '>
                    {getCount('country') > 0 && (
                      <span className='counter-country border border-gray-300 rounded-sm h-5 mr-2 text-gray-500'>
                        <span className='flex items-center ml-1'>
                          <span className='text-[12px]'>{getCount('country')}</span>
                          <X size={14} className="ml-1 cursor-pointer" onClick={() => clearAllOptions()} />
                        </span>
                      </span>
                    )}
                    {visibleSection === 'country' ? (
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

                {includedOptions.country.length > 0 && (
                  <div className="included text-xs font-normal pl-4 pb-4 bg-white">
                    <div className="mb-2">Included:</div>
                    <div className="flex flex-wrap">
                      {includedOptions.country.map((option) => (
                        <div
                          key={option}
                          className="font-medium p-1 rounded-sm text-white bg-blue-400 flex items-center mr-2 mb-2"
                        >
                          <span>{option}</span>
                          <CircleOff size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('country', option, false)} />
                          <X size={13} className="ml-1 cursor-pointer" onClick={() => {
                            removeOption('country', option);
                            toggleVisibility('country');
                          }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {excludedOptions.country.length > 0 && (
                  <div className="excluded text-xs font-normal pl-4 pb-4 bg-white">
                    <div className="mb-2">Excluded:</div>
                    <div className="flex flex-wrap">
                      {excludedOptions.country.map((option) => (
                        <div
                          key={option}
                          className="font-medium p-1 rounded-sm text-white bg-red-400 flex items-center mr-2 mb-2"
                        >
                          <span>{option}</span>
                          <Plus size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('country', option, true)} />
                          <X size={13} className="ml-1 cursor-pointer" onClick={() => {
                            removeOption('country', option);
                            toggleVisibility('country');
                          }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {visibleSection === 'country' && (
                  <div id="lead-country-results" className="search-results shadow-md left-7 bg-white p-4 border">
                    <div className="search-bar mb-2">
                      <input
                        className="search-bar-input w-full p-1 border border-gray-300 rounded shadow-sm font-normal"
                        type="text"
                        placeholder="Add Country"
                        value={searchInput}
                        onChange={(e) => handleSearchInputChange(e)}
                        onKeyDown={(e) => handleSearchInputKeyPress(e, 'country')}
                      />
                    </div>
                    <ul className="max-h-44 overflow-y-scroll font-normal ml-1">
                      {[
                        'United States',
                        'Canada',
                        'United Kingdom',
                        'Australia',
                        'Germany',
                        'Mexico',
                        'Singapore',
                        'South Korea',
                        'Spain',
                      ].map((country) => (
                        <li
                          className="checkbox-container-div flex items-center text-xs border-b py-2 pr-1 hover:bg-blue-50 cursor-pointer"
                          key={country}
                        >
                          <label className="flex items-center w-full cursor-pointer">
                            <input
                              className="country-checkbox mr-2 cursor-pointer"
                              type="checkbox"
                              checked={includedOptions.country.includes(country)}
                              onChange={(e) => handleCheckboxChange('country', country, e.target.checked)}
                            />
                            <span className="checkmark font-semibold text-gray-700">{country}</span>
                          </label>
                          <span className='text-gray-400 text-xs'>1,533</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Name Option */}
            <div className="group">
              <div className="border border-gray-100">
                <div
                  className="filter-option flex justify-between items-center p-3 text-[#071427] bg-white rounded cursor-pointer"
                  onClick={() => toggleVisibility('name')}
                >
                  <span className="flex items-center">
                    <UserRoundSearch size={18} className="mr-3 text-blue-600" />
                    Name
                  </span>
                  <div className='flex '>
                    {getCount('name') > 0 && (
                      <span className='counter-name border border-gray-300 rounded-sm h-5 mr-2 text-gray-500'>
                        <span className='flex items-center ml-1'>
                          <span className='text-[12px]'>{getCount('name')}</span>
                          <X size={14} className="ml-1 cursor-pointer" onClick={() => clearAllOptions()} />
                        </span>
                      </span>
                    )}
                    {visibleSection === 'name' ? (
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

                {includedOptions.name.length > 0 && (
                  <div className="included text-xs font-normal pl-4 pb-4 bg-white">
                    <div className="mb-2">Included:</div>
                    <div className="flex flex-wrap">
                      {includedOptions.name.map((option) => (
                        <div
                          key={option}
                          className="font-medium p-1 rounded-sm text-white bg-blue-400 flex items-center mr-2 mb-2"
                        >
                          <span>{option}</span>
                          <CircleOff size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('name', option, false)} />
                          <X size={13} className="ml-1 cursor-pointer" onClick={() => {
                            removeOption('name', option);
                            toggleVisibility('name');
                          }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {excludedOptions.name.length > 0 && (
                  <div className="excluded text-xs font-normal pl-4 pb-4 bg-white">
                    <div className="mb-2">Excluded:</div>
                    <div className="flex flex-wrap">
                      {excludedOptions.name.map((option) => (
                        <div
                          key={option}
                          className="font-medium p-1 rounded-sm text-white bg-red-400 flex items-center mr-2 mb-2"
                        >
                          <span>{option}</span>
                          <Plus size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('name', option, true)} />
                          <X size={13} className="ml-1 cursor-pointer" onClick={() => {
                            removeOption('name', option);
                            toggleVisibility('name');
                          }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {visibleSection === 'name' && (
                  <div id="lead-name-results" className="search-results shadow-md left-7 bg-white p-4 border">
                    <div className="search-bar mb-2">
                      <input
                        className="search-bar-input w-full p-1 border border-gray-300 rounded shadow-sm font-normal"
                        type="text"
                        placeholder="Add Name"
                        value={searchInput}
                        onChange={(e) => handleSearchInputChange(e)}
                        onKeyDown={(e) => handleSearchInputKeyPress(e, 'name')}
                      />
                    </div>
                    <ul className="max-h-44 overflow-y-scroll font-normal ml-1">
                      {[
                        'John Doe',
                        'Jane Smith',
                        'Robert Johnson',
                        'Emily Davis',
                        'Michael Brown',
                        'Sarah Wilson',
                        'David Lee',
                        'Jessica Taylor',
                        'James Anderson',
                      ].map((name) => (
                        <li
                          className="checkbox-container-div flex items-center text-xs border-b py-2 pr-1 hover:bg-blue-50 cursor-pointer"
                          key={name}
                        >
                          <label className="flex items-center w-full cursor-pointer">
                            <input
                              className="name-checkbox mr-2 cursor-pointer"
                              type="checkbox"
                              checked={includedOptions.name.includes(name)}
                              onChange={(e) => handleCheckboxChange('name', name, e.target.checked)}
                            />
                            <span className="checkmark font-semibold text-gray-700">{name}</span>
                          </label>
                          <span className='text-gray-400 text-xs'>1,333</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Gender Option */}
            <div className="group">
              <div className="border border-gray-100">
                <div
                  className="filter-option flex justify-between items-center p-3 text-[#071427] bg-white rounded cursor-pointer"
                  onClick={() => toggleVisibility('gender')}
                >
                  <span className="flex items-center">
                    <CircleArrowOutUpLeft size={18} className="mr-3 text-blue-600" />
                    Gender
                  </span>
                  <div className='flex '>
                    {getCount('gender') > 0 && (
                      <span className='counter-gender border border-gray-300 rounded-sm h-5 mr-2 text-gray-500'>
                        <span className='flex items-center ml-1'>
                          <span className='text-[12px]'>{getCount('gender')}</span>
                          <X size={14} className="ml-1 cursor-pointer" onClick={() => clearAllOptions()} />
                        </span>
                      </span>
                    )}
                    {visibleSection === 'gender' ? (
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

                {includedOptions.gender.length > 0 && (
                  <div className="included text-xs font-normal pl-4 pb-4 bg-white">
                    <div className="mb-2">Included:</div>
                    <div className="flex flex-wrap">
                      {includedOptions.gender.map((option) => (
                        <div
                          key={option}
                          className="font-medium p-1 rounded-sm text-white bg-blue-400 flex items-center mr-2 mb-2"
                        >
                          <span>{option}</span>
                          <CircleOff size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('gender', option, false)} />
                          <X size={13} className="ml-1 cursor-pointer" onClick={() => {
                            removeOption('gender', option);
                            toggleVisibility('gender');
                          }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {excludedOptions.gender.length > 0 && (
                  <div className="excluded text-xs font-normal pl-4 pb-4 bg-white">
                    <div className="mb-2">Excluded:</div>
                    <div className="flex flex-wrap">
                      {excludedOptions.gender.map((option) => (
                        <div
                          key={option}
                          className="font-medium p-1 rounded-sm text-white bg-red-400 flex items-center mr-2 mb-2"
                        >
                          <span>{option}</span>
                          <Plus size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('gender', option, true)} />
                          <X size={13} className="ml-1 cursor-pointer" onClick={() => {
                            removeOption('gender', option);
                            toggleVisibility('gender');
                          }} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {visibleSection === 'gender' && (
                  <div id="lead-gender-results" className="search-results shadow-md left-7 bg-white p-4 border">

                    <ul className="max-h-44 overflow-y-scroll font-normal ml-1">
                      {['Male', 'Female', 'Non-Binary', 'Other'].map((gender) => (
                        <li
                          className="checkbox-container-div flex items-center text-xs border-b py-2 pr-1 hover:bg-blue-50 cursor-pointer"
                          key={gender}
                        >
                          <label className="flex items-center w-full cursor-pointer">
                            <input
                              className="gender-checkbox mr-2 cursor-pointer"
                              type="checkbox"
                              checked={includedOptions.gender.includes(gender)}
                              onChange={(e) => handleCheckboxChange('gender', gender, e.target.checked)}
                            />
                            <span className="checkmark font-semibold text-gray-700">{gender}</span>
                          </label>
                          <span className='text-gray-400 text-xs'>1,233</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Year Option */}
            <div ref={filterRef} className="group">
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
                  {getCount('year') > 0 && (
                    <span className='counter-year border border-gray-300 rounded-sm h-5 mr-2 text-gray-500'>
                      <span className='flex items-center ml-1'>
                        <span className='text-[12px]'>{getCount('year')}</span>
                        <X size={14} className="ml-1 cursor-pointer" onClick={() => clearAllOptions()} />
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

          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadSearchFilter;
