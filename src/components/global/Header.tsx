import { Link, NavLink } from 'react-router-dom';
import KUITLogo from '../../assets/imgs/KUITLogo.svg';
import LoginButton from './LoginButton';

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
        <div className="flex items-center gap-[58px]">
          <div className="flex gap-[58px] items-center">
            <Link to="/">
              <img src={KUITLogo} alt="KUIT Logo" className="min-w-[63px]" />
            </Link>

            <NavLinkItem to="/recruit">Recruit</NavLinkItem>
            <NavLinkItem to="/projects">Projects</NavLinkItem>
            <NavLinkItem to="/articles">KUITLog</NavLinkItem>
            <NavLinkItem to="/portfolio/list">Portfolio</NavLinkItem>
            <NavLinkItem to="/keyword">Keyword</NavLinkItem>
            <NavLinkItem to="/team-matching">Team matching</NavLinkItem>
          </div>
        </div>

        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
