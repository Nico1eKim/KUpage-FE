import { Link, NavLink } from 'react-router-dom';

import KUITLogo from '../../assets/imgs/KUITLogo.svg';

interface NavLinkItemProps {
  to: string;
  children: React.ReactNode;
}

const NavLinkItem = ({ to, children }: NavLinkItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-700 text-20 transition-colors duration-200 ${
          isActive ? 'text-main' : 'text-white hover:text-border'
        }`
      }
    >
      {children}
    </NavLink>
  );
};

const Header = () => {
  return (
    <header className="w-full h-[141px] fixed top-0 z-floating flex items-center justify-between px-40 bg-gray">
      <div className="flex items-center justify-between w-full">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-[58px]">
          {/* KUIT Logo could go here */}
          <div className="flex gap-[58px] items-center">
            <Link to="/">
              <img src={KUITLogo} alt="KUIT Logo" className="min-w-[63px]" />
            </Link>

            <NavLinkItem to="/recruit">Recruit</NavLinkItem>
            <NavLinkItem to="/projects">Projects</NavLinkItem>
            <NavLinkItem to="/kuitlog">KUITLog</NavLinkItem>
            <NavLinkItem to="/portfolio/list">Portfolio</NavLinkItem>
            <NavLinkItem to="/keyword">Keyword</NavLinkItem>
            <NavLinkItem to="/team-matching">Team matching</NavLinkItem>
          </div>
        </div>

        {/* Login Button */}
        <div>
          <Link
            to="/login"
            className="px-40 py-12 rounded-full bg-gray border-2 border-border text-white font-700 text-20"
          >
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
