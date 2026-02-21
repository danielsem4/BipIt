import { useState, useEffect, useRef } from 'react';
import { scrollToSection } from '../utils/scroll';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'אודות', href: '/aboutus/' },
  { label: 'כתבו עלינו', href: '#reviewsSection' },
  { label: 'צור קשר', href: '#contactUsFormSection' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* Close mobile menu on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
    if (window.innerWidth <= 800) setMobileOpen(false);
  };

  const handleLogoClick = () => scrollToSection('#');

  return (
    /* Exact original: background rgb(40,24,11), fixed, full-width, height ~110px */
    <header
      className="fixed top-0 right-0 left-0 z-50"
      style={{ backgroundColor: 'rgb(40, 24, 11)', minHeight: '70px' }}
      role="banner"
    >
      <div
        ref={menuRef}
        className="max-w-5xl mx-auto px-4 flex items-center justify-between"
        style={{ height: '70px' }}
      >
        {/* Logo — smooth scroll to top */}
        <button
          onClick={handleLogoClick}
          aria-label="חזרה לראש העמוד"
          className="focus:outline-none focus:ring-2 focus:ring-brand-teal rounded pt-2"
        >
          <img
            src="https://web.archive.org/web/20170728023338im_/http://pzlapps.com/wp-content/uploads/2017/02/mainLogo.png"
            alt="BipIt לוגו"
            className="h-10 w-auto"
          />
        </button>

        {/* Desktop navigation — original: color #F2F2F2, font-size 17px */}
        <nav aria-label="ניווט ראשי" className="hidden md:block">
          <ul className="flex gap-8 list-none m-0 p-0 items-center" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-[17px] transition-colors hover:text-brand-teal"
                  style={{ color: '#F2F2F2', textDecoration: 'none' }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-brand-teal"
          aria-label={mobileOpen ? 'סגור תפריט' : 'פתח תפריט'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            /* X icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="4" y1="4" x2="20" y2="20" stroke="#F2F2F2" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="20" y1="4" x2="4" y2="20" stroke="#F2F2F2" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          ) : (
            /* Hamburger icon */
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <line x1="3" y1="6"  x2="21" y2="6"  stroke="#F2F2F2" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="3" y1="12" x2="21" y2="12" stroke="#F2F2F2" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="3" y1="18" x2="21" y2="18" stroke="#F2F2F2" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu — original: background #29B7C9 (teal), animated slide-down */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="תפריט נייד"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: '#29B7C9' }}
      >
        <ul className="flex flex-col py-4 list-none m-0 px-0" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block py-4 text-[22px] font-semibold text-center border-b border-white/30 last:border-0 transition-colors hover:text-brand-dark-bg"
                style={{ color: 'white' }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
