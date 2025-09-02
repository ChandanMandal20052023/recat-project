/*

import { useState } from "react";
import { useEffect } from "react";


export default function App() {
    const [student, setStudent] = useState(null); // No student profile initially
    const [internships, setInternships] = useState([]);
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [selectedInternshipId, setSelectedInternshipId] = useState(null);

    useEffect(() => {
        // --- API CALL FOR INTERNSHIPS WILL GO HERE ---
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

    // Main render logic
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

export default App

*/

