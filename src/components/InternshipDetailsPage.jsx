import { UseState } from 'react';
function InternshipDetailsPage({ internship, onBack, studentSkills }) {
    const [applied, setApplied] = UseState(false);

    const getSkillMatch = (skill) => {
        return studentSkills.some(s => s.toLowerCase() === skill.toLowerCase());
    };
    
    const matchedSkills = internship.requiredSkills.filter(getSkillMatch);
    const missingSkills = internship.requiredSkills.filter(skill => !getSkillMatch(skill));
    const matchPercentage = Math.round((matchedSkills.length / internship.requiredSkills.length) * 100);

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-fade-in">
            <div className="p-6 md:p-8">
                <button onClick={onBack} className="mb-6 flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Dashboard
                </button>

                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">{internship.title}</h2>
                        <p className="text-lg text-gray-600 mt-1">{internship.company}</p>
                    </div>
                    <button 
                        onClick={() => setApplied(true)} 
                        disabled={applied}
                        className={`mt-4 md:mt-0 px-8 py-3 rounded-lg font-semibold text-white transition-transform transform hover:scale-105 ${applied ? 'bg-green-600 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'}`}
                    >
                        {applied ? 'Applied!' : 'Apply Now'}
                    </button>
                </div>
                
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 mb-6 border-b pb-6">
                    <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>{internship.location}</div>
                    <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>{internship.duration}</div>
                    <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1.5"><rect x="2" y="6" width="20" height="14" rx="2"></rect><path d="M12 2v4"></path><path d="M16 2v4"></path><path d="M8 2v4"></path><path d="M2 10h20"></path></svg>{internship.stipend}</div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Job Description</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{internship.description}</p>
                        
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Responsibilities</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            {internship.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    </div>
                    
                    <div>
                        <div className="bg-gray-50 p-4 rounded-lg border">
                             <h3 className="text-lg font-semibold text-gray-800 mb-4">Skill Match</h3>
                             <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${matchPercentage}%` }}></div>
                            </div>
                            <p className="text-sm font-medium text-center text-gray-700 mb-4">{matchPercentage}% Match</p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-sm font-semibold text-green-700 mb-2">Your Matching Skills</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {matchedSkills.length > 0 ? matchedSkills.map(skill => (
                                            <span key={skill} className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">{skill}</span>
                                        )) : <p className="text-xs text-gray-500">No matching skills found.</p>}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-sm font-semibold text-red-700 mb-2">Skills to Develop</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {missingSkills.map(skill => (
                                            <span key={skill} className="px-2 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InternshipDetailsPage;
