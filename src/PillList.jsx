import React, { useState } from 'react';

const PillList = ({ attribute, defaultValue, onChange, required }) => {
  const [pillInput, setPillInput] = useState('');
  const [pillList, setPillList] = useState(defaultValue || []);

  const handleAddPill = () => {
    if (pillInput.trim() === '') return; // prevent empty pills
    setPillList((prevPills) => [...prevPills, pillInput]);
    setPillInput('');
    onChange(attribute, [...pillList, pillInput]);
  };

  const handleRemovePill = (pill) => {
    const newPillList = pillList.filter((p) => p !== pill);
    setPillList(newPillList);
    onChange(attribute, newPillList);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label htmlFor={attribute} className="text-sm font-medium text-gray-700">
          PillList
        </label>
      </div>

      <div className="flex items-center space-x-2 mt-2">
        <input
          type="text"
          value={pillInput}
          onChange={(e) => setPillInput(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 w-full"
          placeholder="Add a pill"
        />
        <button
          type="button"
          onClick={handleAddPill}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          +
        </button>
      </div>

      {pillList.length > 0 && (
        <div className="mt-4 flex gap-2">
        {pillList.map((pill, index) => (
          <div key={index} className="flex items-center space-x-2 bg-indigo-100 px-4 py-1 rounded-md">
            <span className="text-sm text-indigo-800">{pill}</span>
            <button
        type="button"
        onClick={() => handleRemovePill(pill)}
        className="text-indigo-600 bg-transparent rounded-full p-2 focus:outline-none"
      >
        ×
      </button>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};

export default PillList;
