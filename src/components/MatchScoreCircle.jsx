// In another component file, e.g., InternshipCard.js
import React from 'react';
import MatchScoreCircle from './MatchScoreCircle'; // Adjust path as needed

const InternshipCard = ({ internship }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div>
        <h3 className="font-bold">{internship.title}</h3>
        <p className="text-gray-600">{internship.company}</p>
      </div>
      {/* Example usage with a score of 85 */}
      <MatchScoreCircle score={85} />
    </div>
  );
};


import { useState } from "react";
import { useEffect } from "react";
//import IntershipDetailPage from '../../pages/InternshipDetailsPage';
import { DashboardPage } from '../../pages/DashboardPage';
import { ProfileEntryPage } from '../../pages/ProfileEntryPage';
//import { IntershipCard } from '../../components/InternshipCard';
import { Header } from '../../components/Header';
//import { Icones } from '../../components/Icones';





function App() {
    const [student, setStudent] = useState(null);
    const [internships, setInternships] = useState([]);
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [selectedInternshipId, setSelectedInternshipId] = useState(null);

    // This useEffect will now correctly find mockInternships
    useEffect(() => {
        // --- API CALL FOR INTERNSHIPS WILL GO HERE ---
        setInternships( );
    }, []);

    const handleProfileSubmit = (profile) => {
        setStudent(profile);
    };
    
    const handleSelectInternship = (id) => {
        setSelectedInternshipId(id);
        setCurrentPage('details');
    };

    const handleBackToDashboard = () => {
        setCurrentPage('dashboard');
        setSelectedInternshipId(null);
    };

    const selectedInternship = internships.find(i => i.id === selectedInternshipId);

    const renderContent = () => {
        if (!student) {
            return <ProfileEntryPage onProfileSubmit={handleProfileSubmit} />;
        }
        if (currentPage === 'details' && selectedInternship) {
            return <InternshipDetailsPage internship={selectedInternship} onBack={handleBackToDashboard} studentSkills={student.skills} />;
        }
        return <DashboardPage internships={internships} onSelectInternship={handleSelectInternship} studentName={student.name} />;
    };

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header studentName={student?.name} />
            <main className="p-6 max-w-7xl mx-auto">
                {renderContent()}
            </main>
        </div>
    );
}




export default App;

//export default MatchScoreCircle;