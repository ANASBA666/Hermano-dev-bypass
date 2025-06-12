import React, { useState } from 'react';

export default function App() {
  const [keyData, setKeyData] = useState(null);

  async function generateKey() {
    const res = await fetch('/api/generate-key', { method: 'POST' });
    const data = await res.json();
    setKeyData(data);
  }

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">Blox Key Generator</h1>
      <button onClick={generateKey} className="bg-blue-600 text-white px-4 py-2 rounded">Generate Key</button>
      {keyData && <pre className="mt-4">{JSON.stringify(keyData, null, 2)}</pre>}
    </div>
  );
}