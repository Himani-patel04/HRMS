import { Link } from "react-router-dom";
import { UserGroupIcon } from "@heroicons/react/24/solid";

function Navbar() {
  return (
    <nav className="h-16 bg-white text-black flex items-center px-10 shadow">
      <div className="flex items-center gap-2 w-1/4">
        <div className="bg-[#0066cc] p-2 rounded-full">
          <UserGroupIcon className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold">
          <span className="text-black">HR</span>
          <span className="text-[#0066cc]">MS</span>
        </span>
      </div>

      <ul className="flex justify-center gap-8 w-2/4 font-medium">
        
        <li><Link to="/employees" className="hover:text-[#0066cc]">Employees</Link></li>
        <li><Link to="/attendance" className="hover:text-[#0066cc]">Attendance</Link></li>
        <li><Link to="/payroll" className="hover:text-[#0066cc]">Payroll</Link></li>
        <li><Link to="/reports" className="hover:text-[#0066cc]">Reports</Link></li>
      </ul>

    
    
    </nav>
  );
}

export default Navbar;