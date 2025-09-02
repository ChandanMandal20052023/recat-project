import { IntershipDetailPage } from './components/InternshipDetailsPage';
import { Icone } from './Icone';

const InternshipCard = ({ internship, onSelect }) => (
    <div
        className="bg-white p-6 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer"
        onClick={() => onSelect(internship.id)}
    >
        <div className="flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-gray-500">{internship.ministry}</p>
                <h4 className="text-xl font-bold text-gray-900 mt-1">{internship.title}</h4>
                <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
                    <span className="w-4 h-4">{Icone.mapPin}</span> {internship.location}
                </p>
            </div>
            <MatchScoreCircle score={internship.match} />
        </div>
        <div className="mt-4 pt-4 border-t">
            <p className="text-sm font-medium text-gray-600 mb-2">Top Skills Required:</p>
            <div className="flex flex-wrap gap-2">
                {internship.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">{skill}</span>
                ))}
            </div>
        </div>
    </div>
);

export default InternshipCard;