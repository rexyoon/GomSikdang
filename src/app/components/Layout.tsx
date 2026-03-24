import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import logo from './images/Logo.png';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
}

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.85;
      setIsScrolled(window.scrollY > heroHeight);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldBeTransparent = isHomePage && !isScrolled;

  return (
    <div className="min-h-screen">
      <ScrollToTop />

      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          shouldBeTransparent ? 'bg-transparent' : 'bg-amber-50 shadow-md'
        }`}
      >
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="곰식당" className="h-16 w-16" />
            </Link>

            {/* Navigation Links */}
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  to="/about"
                  className={`transition-colors ${
                    shouldBeTransparent
                      ? 'text-white hover:text-amber-200'
                      : 'text-amber-900 hover:text-amber-600'
                  }`}
                >
                  식당소개
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className={`transition-colors ${
                    shouldBeTransparent
                      ? 'text-white hover:text-amber-200'
                      : 'text-amber-900 hover:text-amber-600'
                  }`}
                >
                  메뉴
                </Link>
              </li>
              <li>
                <Link
                  to="/chef"
                  className={`transition-colors ${
                    shouldBeTransparent
                      ? 'text-white hover:text-amber-200'
                      : 'text-amber-900 hover:text-amber-600'
                  }`}
                >
                  주방장
                </Link>
              </li>
              <li>
                <Link
                  to="/history"
                  className={`transition-colors ${
                    shouldBeTransparent
                      ? 'text-white hover:text-amber-200'
                      : 'text-amber-900 hover:text-amber-600'
                  }`}
                >
                  역사
                </Link>
              </li>
              <li>
                <Link
                  to="/location"
                  className={`transition-colors ${
                    shouldBeTransparent
                      ? 'text-white hover:text-amber-200'
                      : 'text-amber-900 hover:text-amber-600'
                  }`}
                >
                  오시는 길
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <img src={logo} alt="곰식당" className="h-20 w-20 mb-4" />
              <p className="text-stone-400">야찐도 반한 맛</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">영업시간</h3>
              <p className="text-stone-400">월-금: 11:00 - 22:00</p>
              <p className="text-stone-400">토-일: 12:00 - 23:00</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">연락처</h3>
              <p className="text-stone-400">전화: 02-1234-5678</p>
              <p className="text-stone-400">이메일: info@gomrestaurant.com</p>
            </div>
          </div>
          <div className="border-t border-stone-800 mt-8 pt-8 text-center text-stone-400">
            <p>&copy; 2026 곰식당. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}