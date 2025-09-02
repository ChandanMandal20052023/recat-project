import {InternshipCard} from './InternshipCard';
const Header = ({ studentName }) => (
    <header className="flex h-16 items-center gap-4 border-b bg-white px-6 sticky top-0 z-10">
        <h1 className="text-xl font-semibold flex-1 text-blue-800">PM Internship Scheme</h1>
        {studentName && (
             <div className="flex items-center gap-2">
                <img src={`https://placehold.co/40x40/E2E8F0/4A5568?text=${studentName.charAt(0)}`} alt="Avatar" className="h-10 w-10 rounded-full border" />
                <div className="text-left">
                    <div className="font-semibold">{studentName}</div>
                </div>
            </div>
        )}
    </header>
);

export default Header;