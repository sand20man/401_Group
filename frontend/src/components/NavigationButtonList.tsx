import { JSX, useState } from 'react';
import {
  Menu,
  X,
  Home,
  User,
  MessageSquare,
  FileText,
  Calendar,
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        backgroundColor: '#007bff',
        padding: '10px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <button
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            cursor: 'pointer',
            display: 'none',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul
          style={{
            display: 'flex',
            listStyle: 'none',
            padding: '0',
            margin: '0',
            gap: '15px',
          }}
        >
          <NavItem icon={<Home size={20} />} label="Home" />
          <NavItem icon={<User size={20} />} label="Profile" />
          <NavItem icon={<MessageSquare size={20} />} label="Messages" />
          <NavItem icon={<FileText size={20} />} label="Notes" />
          <NavItem icon={<Calendar size={20} />} label="Calendar" />
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        cursor: 'pointer',
        padding: '5px 10px',
      }}
    >
      {icon}
      <span style={{ marginLeft: '5px' }}>{label}</span>
    </li>
  );
}
