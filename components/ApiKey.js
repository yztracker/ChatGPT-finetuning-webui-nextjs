import React, { useState, useContext  } from 'react';
import useSWR, { mutate } from 'swr';
import { ApiKeyContext } from '../contexts/ApiKeyContext'

function ApiKey() {
  const [input, setInput] = useState('');
  const {apiKey, setApiKey} = useContext(ApiKeyContext);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleFetchData = () => {
    setApiKey(input);
    mutate();
  };


  return (
    <div>
      <div>
        <label htmlFor="apiKey">API Key:</label>
      </div>
      <div>
        <input
          id="apiKey"
          type="text"
          value={input}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleFetchData}>Fetch Data</button>
      </div>

    </div>
  );
}

export default ApiKey;
