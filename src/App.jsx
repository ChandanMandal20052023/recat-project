import React, { useState, useEffect } from "react";
import ProfileEntryPage from './components/ProfileEntryPage';
import InternshipDetailsPage from './components/InternshipDetailsPage';
import DashboardPage from './components/DashboardPage';
import Header from './components/Header';

const mockInternships = [
  {
    id: 1,
    title: 'React Developer Intern',
    company: 'Tech Corp',
    location: 'Remote',
  },
  // Add more mock data as needed
];

export default function App() {
    const [student, setStudent] = useState(null);
    const [internships, setInternships] = useState([]);
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [selectedInternshipId, setSelectedInternshipId] = useState(null);

    useEffect(() => {
        setInternships(mockInternships);
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
