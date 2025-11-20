import { JSX, Suspense } from 'react';
import { matchPath, Outlet, useLocation } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

interface RoutesChildren {
  routes_children: {
    path: string;
    element: JSX.Element;
    hasHeader?: boolean;
    hasFooter?: boolean;
  }[];
}

const Layout = ({ routes_children }: RoutesChildren) => {
  const { pathname } = useLocation();

  const currentRoute = routes_children.find((child) => matchPath(child.path, pathname));
  const hasHeader = currentRoute?.hasHeader;

  const mainContentPaddingClass = hasHeader ? 'pt-[141px]' : '';

  return (
    <div id="layout" className="h-screen w-full md:overflow-x-hidden md:h-screen md:w-screen">
      {hasHeader && <Header />}

      <div className={mainContentPaddingClass}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>

      {currentRoute?.hasFooter && <Footer />}
    </div>
  );
};

export default Layout;
