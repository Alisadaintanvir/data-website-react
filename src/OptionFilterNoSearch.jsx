import { ChevronDown, ChevronUp, CircleOff, X, Plus } from 'lucide-react';

const OptionFilterNoSearch = ({
  includedOptions,
  excludedOptions,
  visibleSection,
  onToggleVisibility,
  onRemoveOption,
  onClearOptionFilters, // Prop to clear specific option filters
  onToggleOption,
  optionsList,
  icon: Icon,
  label,
  optionType,
}) => {
  const getCount = () => includedOptions[optionType]?.length || 0;

  return (
    <div className="group">
      <div className="border border-gray-100">
        <div
          className="filter-option flex justify-between items-center p-3 text-[#071427] bg-white rounded cursor-pointer"
          onClick={() => onToggleVisibility(optionType)}
        >
          <span className="flex items-center">
            <Icon size={18} className="mr-3 text-blue-600" />
            {label}
          </span>
          <div className="flex">
            {getCount() > 0 && (
              <span className="counter-country border border-gray-300 rounded-sm h-5 mr-2 text-gray-500">
                <span className="flex items-center ml-1">
                  <span className="text-[12px]">{getCount()}</span>
                  <X size={14} className="ml-1 cursor-pointer" onClick={() => onClearOptionFilters(optionType)} />
                </span>
              </span>
            )}
            {visibleSection === optionType ? (
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

        {includedOptions[optionType]?.length > 0 && (
          <div className="included text-xs font-normal pl-4 pb-4 bg-white">
            <div className="mb-2">Included:</div>
            <div className="flex flex-wrap">
              {includedOptions[optionType].map((option) => (
                <div
                  key={option}
                  className="font-medium p-1 rounded-sm text-white bg-blue-400 flex items-center mr-2 mb-2"
                >
                  <span>{option}</span>
                  <CircleOff
                    size={13}
                    className="ml-1 cursor-pointer"
                    onClick={() => onToggleOption(optionType, option, false)}
                  />
                  <X
                    size={13}
                    className="ml-1 cursor-pointer"
                    onClick={() => {
                      onRemoveOption(optionType, option);
                      onToggleVisibility(optionType);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {excludedOptions[optionType]?.length > 0 && (
          <div className="excluded text-xs font-normal pl-4 pb-4 bg-white">
            <div className="mb-2">Excluded:</div>
            <div className="flex flex-wrap">
              {excludedOptions[optionType].map((option) => (
                <div
                  key={option}
                  className="font-medium p-1 rounded-sm text-white bg-red-400 flex items-center mr-2 mb-2"
                >
                  <span>{option}</span>
                  <Plus
                    size={13}
                    className="ml-1 cursor-pointer"
                    onClick={() => onToggleOption(optionType, option, true)}
                  />
                  <X
                    size={13}
                    className="ml-1 cursor-pointer"
                    onClick={() => {
                      onRemoveOption(optionType, option);
                      onToggleVisibility(optionType);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {visibleSection === optionType && (
          <div id={`lead-${optionType}-results`} className="search-results shadow-md left-7 bg-white p-4 border">
            <ul className="max-h-44 overflow-y-scroll font-normal ml-1">
              {optionsList.map((option) => (
                <li
                  className="checkbox-container-div flex items-center text-xs border-b py-2 pr-1 hover:bg-blue-50 cursor-pointer"
                  key={option}
                >
                  <label className="flex items-center w-full cursor-pointer">
                    <input
                      className={`${optionType}-checkbox mr-2 cursor-pointer`}
                      type="checkbox"
                      checked={includedOptions[optionType]?.includes(option)}
                      onChange={(e) => onToggleOption(optionType, option, e.target.checked)}
                    />
                    <span className="checkmark font-semibold text-gray-700">{option}</span>
                  </label>
                  <span className="text-gray-400 text-xs">1,533</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default OptionFilterNoSearch;
