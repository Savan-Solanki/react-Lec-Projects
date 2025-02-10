// src/ApiHunter.js
import React, { useState } from "react";
import axios from "axios";
import './api.css'

const ApiHunter = () => {
  const [url, setUrl] = useState(""); // URL for the API request
  const [method, setMethod] = useState("GET"); // Request method (GET, POST, etc.)
  const [response, setResponse] = useState(null); // Store response data
  const [error, setError] = useState(null); // Store errors
  const [loading, setLoading] = useState(false); // Loading state

  const handleRequest = async () => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await axios({
        method,
        url,
      });
      setResponse(res.data);
    } catch (err) {
      setError("Error: " + (err.response ? err.response.data : err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>API Hunter</h1>
      <div>
        <label>API URL: </label>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter API URL"
        />
      </div>
      <div>
        <label>Request Method: </label>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>
      <div>
        <button onClick={handleRequest} disabled={loading}>
          {loading ? "Loading..." : "Make Request"}
        </button>
      </div>
      
      <div>
        {response && (
          <div>
            <h2>Response:</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
        {error && (
          <div style={{ color: "red" }}>
            <h2>Error:</h2>
            <pre>{error}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiHunter;