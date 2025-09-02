import React from 'react';
import { UseState } from 'react';
// Import a search icon from a popular icon library, e.g. react-icons
import { FaSearch } from 'react-icons/fa';
// Corrected import path below
import InternshipCard from './InternshipCard'; // Adjust path as needed

const DashboardPage = ({ internships, onSelectInternship, studentName }) => {
  return (
    <div className="fade-in space-y-6">
      <div className="bg-blue-600 text-white p-6 rounded-xl">
        <h2 className="text-3xl font-bold">Welcome, {studentName}!</h2>
        <p className="mt-2 opacity-90">Your AI-powered recommendations are ready.</p>
      </div>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search for internships..."
          className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Top Matches For You</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {internships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} onSelect={onSelectInternship} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;