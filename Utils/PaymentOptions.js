import React, { useState } from 'react';
import { BanknotesIcon, CreditCardIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const PaymentOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Payment Method');

  const options = [
    { name: 'Credit/Debit Card', icon: <CreditCardIcon className="w-5 h-5 mr-2 inline" /> },
    { name: 'UPI', icon: <GlobeAltIcon className="w-5 h-5 mr-2 inline" /> },
    { name: 'Cash on Delivery', icon: <BanknotesIcon className="w-5 h-5 mr-2 inline" /> },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option.name);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left w-64"> {/* Fixed width for the dropdown */}
      <div>
        <button
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          onClick={toggleDropdown}
        >
          <span className="truncate">{selectedOption}</span> {/* Truncate long text */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.56l3.71-3.35a.75.75 0 011.06 1.06l-4.25 3.75a.75.75 0 01-1.06 0l-4.25-3.75a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg">
          <ul className="max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto">
            {options.map((option) => (
              <li
                key={option.name}
                className="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100 flex items-center"
                onClick={() => handleOptionClick(option)}
                style={{ width: '100%' }} // Ensure full width for each dropdown item
              >
                {option.icon}
                <span className="flex-1 truncate">{option.name}</span> {/* Truncate long text */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;
