import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LandingPage from './LandingPage';

const CheckPassword = () => {
  const [hash, setHash] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckPassword = async () => {
    setIsLoading(true);
    setMessage('');

    if (!hash.trim()) {
      setMessage('PLEASEEEE input a proper value');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.get(`/check?hash=${hash}`);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error: Unable to check password.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <LandingPage />
      <div className="min-h-screen bg-gray-600 flex items-center justify-center">
        <div className="bg-black p-8 rounded-lg shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-white">Check Password</h1>
          <div className="mb-4">
            <input
              type="text"
              className="border border-gray-300 px-2 py-1 mr-2 w-full bg-gray-300"
              placeholder="Enter hash..."
              value={hash}
              onChange={(e) => setHash(e.target.value)}
            />
          </div>
          <button
            className={`bg-red-500 text-white px-4 py-1 rounded ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleCheckPassword}
            disabled={isLoading}
          >
            {isLoading ? 'Checking...' : 'Check'}
          </button>
          {message && (
            <p className="border border-gray-300 p-2 mb-4 mt-4 text-white">{message}</p>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckPassword;
