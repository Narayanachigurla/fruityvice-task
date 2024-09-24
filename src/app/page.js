"use client";

import { useState } from 'react';

export default function Home() {
  const [endpoint, setEndpoint] = useState('fruit/all'); // Default endpoint
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleFetch = async () => {
    setError(''); // Clear previous errors
    try {
      const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://www.fruityvice.com/api/' + endpoint)}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setResponse(JSON.stringify(JSON.parse(data.contents), null, 2)); // Parse and format the JSON response
    } catch (err) {
      setError('Error fetching data: ' + err.message);
      setResponse(''); // Clear the response on error
    }
  };

  return (
    <>
<div className="flex flex-col md:flex-row w-full">
  <div className="w-full md:w-1/2 p-8 flex items-center justify-center flex-col">
    <h1 className="text-6xl p-6 text-center">Fruityvice</h1>
    <p className="text-1xl text-center">
    A powerful webservice which provides data for all kinds of fruit! You can use Fruityvice to find out interesting information about fruit and educate yourself. The webservice is completely free to use and contribute to.
    </p>
    <button className="border border-black text-black bg-white m-6" style={{ padding: '10px 20px', borderRadius: '20px' }}>
      Get Started
    </button>
  </div>
  
  <div className="w-full md:w-1/2 relative">
    <div
      className="h-[50vh] md:h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/cherry.png)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  </div>
</div>



<div className="flex flex-col-reverse md:flex-row-reverse w-full">
  <div className="w-full md:w-1/3 h-1/2 md:h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/watermelon.png)' }}>
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="w-full md:w-2/3 p-8 flex items-center justify-center flex-col">
    <h1 className="text-6xl p-6 text-center">What functions does it provide?</h1>
    <p className="text-1xl text-center">
      With Fruityvice you can receive interesting data from any fruit of your choosing. On top of that, you can add fruits by yourself as well! Added fruits will first have to be approved by an admin to avoid any errors in the data. The shown data is based on 100 grams of the listed fruit. The owner does not guarantee the available data is 100% flawless; however, he will do his best to fix any wrong data.
    </p>
    <button className="border border-black text-black bg-white m-6" style={{ padding: '10px 20px', borderRadius: '20px' }}>
      Learn More
    </button>
  </div>
</div>



<div className="flex flex-col md:flex-row w-full">
  <div className="w-full md:w-2/3 p-8 flex items-center justify-center flex-col">
    <h1 className="text-6xl p-6">How does it work?</h1>
    <p className="text-xl text-center">
      Currently, the webservice consists of two functions: receiving data for a specific fruit or all fruit,
      and a function to add your own data. An example of what the response body would look like can be seen on the
      right. To receive the shown data.
    </p>
    <button className="border border-black text-black bg-white m-6" style={{ padding: '10px 20px', borderRadius: '20px' }}>
      Try it!
    </button>
  </div>

  <div className="w-full md:w-1/3 h-1/2 md:h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/images/apiexample.png)' }}>
    <div className="absolute inset-0"></div>
  </div>
</div>


      <div className="flex flex-col items-center justify-center h-screen p-8 bg-gray-100">
        {/* API Input Section */}
        <div className="w-full max-w-md mb-4">
          <h2 className="text-2xl mb-4 text-center">API Endpoint</h2>
          
          <input
            type="text"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            placeholder="Enter API path (e.g., fruit/all or fruit/banana)"
            className="border border-gray-300 rounded-lg p-2 w-full mb-4"
          />

          <button 
            onClick={handleFetch} 
            className="bg-blue-500 text-white rounded-lg py-2 px-4 w-full"
          >
            Get Response
          </button>

          {error && <p className="text-red-500 mt-2 text-center">{error}</p>} {/* Error message */}
        </div>

        {/* API Response Box */}
        <div className="w-full max-w-md">
          <h2 className="text-2xl mb-4 text-center">API Response</h2>
          <div className="border border-gray-300 rounded-lg p-4 h-64 bg-white overflow-auto">
            <pre className="whitespace-pre-wrap border border-gray-300 rounded-lg p-2 bg-gray-50 text-gray-800">
              {response || "API response will appear here..."}
            </pre>
          </div>
        </div>
      </div>
    </>
  );
}
