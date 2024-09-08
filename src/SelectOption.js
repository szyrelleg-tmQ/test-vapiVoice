import React, { useState } from 'react';
import Vapi from "@vapi-ai/web";
import voiceOptionsData from './voiceOptions.json';

const SelectOption = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const vapi = new Vapi("20f8d657-c9c6-446d-a11d-e107d94e80a0");
  
  const options = voiceOptionsData.options;
  
  const handleChange = (event) => {
    vapi.stop();
    setIsLoading(true);
    setSelectedOption(event.target.value);
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 67bb15f1-dff5-4fad-97a3-6d542e217a18");
    myHeaders.append("Content-Type", "application/json");

    const selectedVoice = JSON.parse(event.target.value);
    const raw = JSON.stringify({
      "voice": selectedVoice,
    });
    
    const requestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://api.vapi.ai/assistant/7558056c-40da-45de-ab95-a93117eb75ed", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        if(result){
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log("error", error);
        setIsLoading(false)
      });
  };

  const start = async () => {
    if (selectedOption) {
      await vapi.start("7558056c-40da-45de-ab95-a93117eb75ed");
    } else {
      console.error("Please select a voice before starting");
    }
  };

  return (
    <div className="max-w-xs mx-auto mt-8">
      <label htmlFor="select-option" className="block mb-2 text-sm font-medium text-gray-900">
        Choose a voice
      </label>
      <select
        id="select-option"
        value={selectedOption}
        onChange={handleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Select a voice</option>
        {options.map((option, index) => (
          <option key={index} value={JSON.stringify(option.value)}>
            {option.label}
          </option>
        ))}
      </select>
      {selectedOption && (
        <p className="mt-4 text-sm text-gray-600">
          You selected: {options.find(opt => JSON.stringify(opt.value) === selectedOption)?.label}
        </p>
      )}
      <button
        onClick={start} 
        className="mt-4 bg-blue-500 text-white rounded-lg px-4 py-2.5 disabled:bg-gray-300"
        disabled={isLoading}
      >
        Start
      </button>
    </div>
  );
};

export default SelectOption;