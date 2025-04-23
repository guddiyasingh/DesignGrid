import React, { useState } from 'react';

function ApiButton() {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke'); // replace with your API
      const result = await response.json();
      setData(result);
      console.log('API response:', result);
    } catch (error) {
      console.error('API call failed:', error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Call API</button>
      {data && (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
}

export default ApiButton;
