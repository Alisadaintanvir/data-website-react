import { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp, UserRoundSearch, Merge, Calendar, CircleOff, X, Minus } from 'lucide-react';

const LeadSearchFilter = () => {
  const [includedOptions, setIncludedOptions] = useState({
    country: [],
    name: [],
    gender: [],
    year: []
  });

  const toggleOption = (section, option) => {
    setIncludedOptions((prev) => ({
      ...prev,
      [section]: prev[section].includes(option)
        ? prev[section].filter((item) => item !== option)
        : [...prev[section], option]
    }));
  };

  const [visibility, setVisibility] = useState({
    country: false,
    name: false,
    gender: false,
    year: false,
  });

  const toggleVisibility = (section) => {
    setVisibility((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (e, section, option) => {
    e.stopPropagation(); // Prevent click event from bubbling up
    toggleOption(section, option);
  };

  return (
    <section id="lead-section" className="lead-section ml-3 mt-3">
      <div id="lead-section-div" className="lead-section-div">
        <div className="left-lead-section w-72 h-[480px] overflow-y-scroll">
          <div className="filter-title flex items-baseline p-4 bg-white border-b border-gray-100 text-[#071427] font-semibold">
            Filter
          </div>
          <div className="filter-options font-medium mb-5">
            {/* Country Option */}
            <div className="group">
              <div className="border border-gray-100">
                <div
                  className="filter-option flex justify-between items-center p-3 text-[#071427] bg-white rounded cursor-pointer"
                  onClick={() => toggleVisibility('country')}
                >
                  <span className="flex items-center ">
                    <MapPin size={18} className="mr-3 text-blue-600" />
                    Country
                  </span>
                  {visibility.country ? (
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

                {visibility.country && (
                  <>
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
                              <CircleOff size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('country', option)} />
                              <X size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('country', option)} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    <div id="lead-country-results" className="search-results w-60 absolute shadow-md left-7 bg-white p-4">
                      <div className="search-bar mb-2">
                        <input
                          className="search-bar-input w-full p-1 border border-gray-300 rounded shadow-sm font-normal"
                          type="text"
                          placeholder="Add Position"
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
                            className="checkbox-container-div flex items-center py-2 hover:bg-blue-50 cursor-pointer"
                            key={country}
                            onClick={() => toggleOption('country', country)}
                          >
                            <input
                              className="country-checkbox mr-2"
                              type="checkbox"
                              checked={includedOptions.country.includes(country)}
                              onChange={(e) => handleCheckboxChange(e, 'country', country)}
                            />
                            <span className="checkmark">{country}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Person Name Option */}
            <div className="group">
              <div
                className="filter-option flex justify-between items-center border border-gray-100 p-3 text-[#071427] bg-white rounded cursor-pointer"
                onClick={() => toggleVisibility('name')}
              >
                <span className="flex items-center">
                  <UserRoundSearch size={18} className="mr-3 text-blue-600" />
                  Person name
                </span>
                {visibility.name ? (
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
              {visibility.name && (
                <>
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
                            <CircleOff size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('name', option)} />
                            <X size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('name', option)} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div id="first-name-results" className="search-results w-60 absolute shadow-sm left-7 bg-white p-4">
                    <div className="search-bar mb-2">
                      <input
                        className="search-bar-input font-normal w-full p-1 border border-gray-300 rounded"
                        type="text"
                        placeholder="Add Position"
                      />
                    </div>
                    <ul className="max-h-44 overflow-y-scroll font-normal ml-1">
                      {['John Doe', 'Jane Smith', 'Alice Johnson'].map((name) => (
                        <li
                          className="filter-subtype-div py-2 hover:bg-blue-50 cursor-pointer"
                          key={name}
                          onClick={() => toggleOption('name', name)}
                        >
                          <input
                            className="name-checkbox mr-2"
                            type="checkbox"
                            checked={includedOptions.name.includes(name)}
                            onChange={(e) => handleCheckboxChange(e, 'name', name)}
                          />
                          <span className="name">{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Gender Option */}
            <div className="group">
              <div
                className="filter-option flex justify-between items-center border border-gray-100 p-3 text-[#071427] bg-white rounded cursor-pointer"
                onClick={() => toggleVisibility('gender')}
              >
                <span className="flex items-center">
                  <Merge size={18} className="mr-3 text-blue-600" />
                  Gender
                </span>
                {visibility.gender ? (
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
              {visibility.gender && (
                <>
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
                            <CircleOff size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('gender', option)} />
                            <X size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('gender', option)} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div id="gender-results" className="search-results w-60 absolute shadow-md left-7 bg-white p-4">
                    <ul className="max-h-52 overflow-y-scroll">
                      {['Male', 'Female', 'Unknown'].map((gender) => (
                        <li
                          className="filter-subtype-div py-2 hover:bg-blue-50 cursor-pointer font-normal"
                          key={gender}
                          onClick={() => toggleOption('gender', gender)}
                        >
                          <input
                            className="gender-checkbox mr-2"
                            type="checkbox"
                            checked={includedOptions.gender.includes(gender)}
                            onChange={(e) => handleCheckboxChange(e, 'gender', gender)}
                          />
                          <span className="gender">{gender}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Founded Year Option */}
            <div className="group">
              <div
                className="filter-option flex justify-between items-center border border-gray-100 p-3 text-[#071427] bg-white rounded cursor-pointer"
                onClick={() => toggleVisibility('year')}
              >
                <span className="flex items-center">
                  <Calendar size={18} className="mr-3 text-blue-600" />
                  Founded year
                </span>
                {visibility.year ? (
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
              {visibility.year && (
                <>
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
                            <CircleOff size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('year', option)} />
                            <X size={13} className="ml-1 cursor-pointer" onClick={() => toggleOption('year', option)} />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  <div id="lead-year-results" className="search-results w-60 absolute shadow-md left-7 bg-white p-4">
                    <div className="year-selection-div mb-4">
                      <div className="year-selection-div-inner flex items-center  font-normal">
                        <div className="year-search-bar-from mr-2">
                          <input
                            className="year-search-bar-input w-full p-1 border border-gray-300 rounded"
                            id="year-from"
                            type="text"
                            placeholder="From"
                          />
                        </div>
                        <div className="flex items-center px-1">
                          <i className="fa-solid fa-minus"></i>
                        </div>
                        <Minus />
                        <div className="year-search-bar-to ml-4">
                          <input
                            className="year-search-bar-input w-full p-1 border border-gray-300 rounded"
                            id="year-to"
                            type="text"
                            placeholder="To"
                          />
                        </div>
                      </div>
                    </div>

                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadSearchFilter;
