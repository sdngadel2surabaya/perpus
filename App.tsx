import React from 'react';
import OrgChart from './components/OrgChart';
import { BACKGROUND_IMAGE } from './constants';

const App: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}
    >
      <header className="mb-8 text-center bg-white bg-opacity-80 p-6 rounded-lg shadow-xl max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-2">Perpustakaan Organizational Chart</h1>
        <p className="text-lg text-gray-700">Visualizing the structure of our library team.</p>
      </header>
      <main className="w-full max-w-7xl bg-white bg-opacity-90 rounded-xl shadow-2xl p-6 md:p-10 lg:p-12 mb-8">
        <OrgChart />
      </main>
      <footer className="mt-8 text-center text-white text-opacity-80">
        <p>&copy; 2024 Perpustakaan. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;