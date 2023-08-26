import React, { useState } from 'react';

function ApiKey() {
  const [apiKey, setApiKey] = useState('');
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    setApiKey(e.target.value);
  };

  const handleFetchData = () => {
    fetch('YOUR_API_ENDPOINT', {
      headers: {
        'Authorization': `Bearer ${apiKey}`
      }
    })
    .then(response => response.json())
    .then(data => {
      setData(data);
    })
    .catch(error => {
      console.error('There was an error fetching the data:', error);
    });
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
          value={apiKey}
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleFetchData}>Fetch Data</button>
      </div>

      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ApiKey;
