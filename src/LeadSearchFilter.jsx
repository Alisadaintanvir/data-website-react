import { useState, useEffect, useRef } from 'react';
import { MapPin, UserRoundSearch, CircleArrowOutUpLeft } from 'lucide-react';
import OptionFilter from './OptionFilter';
import YearFilter from './YearFilter';

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

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'Mexico',
    'Singapore',
    'South Korea',
    'Spain',
  ];

  const genders = ['Male', 'Female', 'Non-binary', 'Prefer not to say'];

  const names = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];

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
            <OptionFilter
              includedOptions={includedOptions}
              excludedOptions={excludedOptions}
              visibleSection={visibleSection}
              searchInput={searchInput}
              onSearchInputChange={handleSearchInputChange}
              onSearchInputKeyPress={handleSearchInputKeyPress}
              onToggleVisibility={toggleVisibility}
              onRemoveOption={removeOption}
              onClearAllOptions={clearAllOptions}
              onToggleOption={toggleOption}
              onHandleCheckboxChange={handleCheckboxChange}
              optionsList={countries}
              icon={MapPin}
              label="Country"
              optionType="country"
            />

            {/* Name Option */}
            <OptionFilter
              includedOptions={includedOptions}
              excludedOptions={excludedOptions}
              visibleSection={visibleSection}
              searchInput={searchInput}
              onSearchInputChange={handleSearchInputChange}
              onSearchInputKeyPress={handleSearchInputKeyPress}
              onToggleVisibility={toggleVisibility}
              onRemoveOption={removeOption}
              onClearAllOptions={clearAllOptions}
              onToggleOption={toggleOption}
              onHandleCheckboxChange={handleCheckboxChange}
              optionsList={names}
              icon={UserRoundSearch}
              label="Name"
              optionType="name"
            />

            {/* Gender Option */}
            <OptionFilter
              includedOptions={includedOptions}
              excludedOptions={excludedOptions}
              visibleSection={visibleSection}
              searchInput={searchInput}
              onSearchInputChange={handleSearchInputChange}
              onSearchInputKeyPress={handleSearchInputKeyPress}
              onToggleVisibility={toggleVisibility}
              onRemoveOption={removeOption}
              onClearAllOptions={clearAllOptions}
              onToggleOption={toggleOption}
              onHandleCheckboxChange={handleCheckboxChange}
              optionsList={genders}
              icon={CircleArrowOutUpLeft}
              label="Gender"
              optionType="gender"
            />

            {/* Year Option */}
            <YearFilter
              includedOptions={includedOptions}
              excludedOptions={excludedOptions}
              visibleSection={visibleSection}
              toggleVisibility={toggleVisibility}
              toggleOption={toggleOption}
              removeOption={removeOption}
              handleYearSelection={handleYearSelection}
              yearFrom={yearFrom}
              yearTo={yearTo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadSearchFilter;
