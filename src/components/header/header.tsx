import { NavLink } from 'react-router';
import { headerLinks } from './model.header';

export function Header() {
  return (
    <header className="w-screen px-10 mx-auto bg-black text-white py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Company</h1>
        <nav>
          <ul className="flex space-x-4">
            {headerLinks.map((link) => {
              return (
                <li key={link.router}>
                  <NavLink to={link.router} className="text-blue-400">
                    {link.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
