import React from 'react';

export default async function IsrDataComponent() {

  const res = await fetch('https://api.chucknorris.io/jokes/random', {
    next: { revalidate: 15 },
  });

  if (!res.ok) {
    return <div>Failed to load data</div>;
  }

  const data = await res.json();

  return (
    <div className="p-6 mt-4 border border-gray-200 rounded-lg shadow-sm bg-white dark:bg-gray-900 dark:border-gray-700 max-w-lg">
      <h3 className="text-lg font-bold mb-2 text-blue-600">ISR Data (Updates every 15s)</h3>
      <p className="text-gray-800 dark:text-gray-200 italic mb-4">
        &quot;{data.value}&quot;
      </p>
      <div className="text-xs text-gray-500">
        Fetched at: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}