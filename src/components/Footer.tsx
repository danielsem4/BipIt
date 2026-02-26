import { scrollToSection } from '../utils/scroll';

interface FooterProps {
  onDownload: () => void;
}

/* Mirrors the header nav exactly */
const NAV_LINKS = [
  { label: 'אודות', href: '/aboutus/' },
  { label: 'כתבו עלינו', href: '#reviewsSection' },
  { label: 'צור קשר', href: '#contactUsFormSection' },
] as const;

export default function Footer({ onDownload }: FooterProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    /*
     * Exact original:
     *   background-color: #4E361D (medium brown)
     *   height: 250px (auto on mobile)
     *   color: white for links, #B9B0A5 for labels, #EEE3CF for footer message
     */
    <footer
      className="w-full"
      style={{ backgroundColor: '#4E361D' }}
      role="contentinfo"
      aria-label="פוטר האתר"
    >
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-6">
        <div className="flex flex-wrap justify-between gap-8 mb-6">

          {/*
           * .footerTabsStructure: color #B9B0A5 (labels), white (links)
           *   font-size 17px, text-align right, direction rtl
           */}
          <nav aria-label="ניווט פוטר" className="text-right" style={{ direction: 'rtl' }}>
            <ul className="list-none m-0 p-0 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="cursor-pointer transition-opacity hover:opacity-75"
                    style={{ color: 'white', fontSize: '17px', textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/*
           * .footerTabsSocialStructure: color white, font-size 17px
           * .tabTitle: font-weight 700, border-bottom 1px solid white
           */}
          <div className="text-right" style={{ direction: 'rtl' }}>
            <p
              className="font-bold border-b border-white inline-block mb-4"
              style={{ color: 'white', fontSize: '17px', lineHeight: '33px', width: '150px' }}
            >
              עקבו אחרינו
            </p>
            <ul className="list-none m-0 p-0 mt-3 space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/bipit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 transition-opacity hover:opacity-75"
                  style={{ color: 'white', fontSize: '17px', textDecoration: 'none' }}
                  aria-label="עמוד הפייסבוק של Bip it (נפתח בחלון חדש)"
                >
                  <img
                    src="/images/fblogo.png"
                    alt=""
                    aria-hidden="true"
                    style={{ width: '30px' }}
                  />
                  פייסבוק
                </a>
              </li>
            </ul>
          </div>

          {/*
           * .footerTabsOurAppsStructure .tabTitle: color white, border-bottom 1px solid white
           *   font-size 17px, cursor pointer
           * Download button: float left in original
           */}
          <div className="text-right" style={{ direction: 'rtl' }}>
            <a
              href="http://www.syntax.org.il"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col items-end gap-2 mb-4 transition-opacity hover:opacity-75"
              style={{ textDecoration: 'none' }}
              aria-label="לאתר מכללת SYNTAX להכשרת מפתחי אפליקציות (נפתח בחלון חדש)"
            >
              <img
                src="https://syntax.org.il/wp-content/uploads/2016/08/logofinal.png"
                alt="מכללת SYNTAX"
                style={{ height: '40px', objectFit: 'contain' }}
              />
              <span
                className="font-bold border-b border-white"
                style={{ color: 'white', fontSize: '13px', lineHeight: '24px' }}
              >
                להכשרת מפתחי אפליקציות
              </span>
            </a>

            <div>
              <button
                onClick={onDownload}
                aria-label="הורד את אפליקציית Bip it"
                className="focus:outline-none focus:ring-2 focus:ring-brand-teal rounded mt-2"
                style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              >
                <img
                  src="/images/download.png"
                  alt="הורד את האפליקציה"
                  className="hover:opacity-80 transition-opacity"
                  style={{ height: '48px', objectFit: 'contain' }}
                />
              </button>
            </div>
          </div>
        </div>

        {/*
         * .footerMessage: color #EEE3CF, font-size 12px, text-align center, direction rtl
         */}
        <p
          className="text-center w-full border-t border-[#7B664F] pt-4"
          style={{ color: '#EEE3CF', fontSize: '12px', direction: 'rtl' }}
        >
          כל הזכויות שמורות © 2015 ל-Bip it &nbsp;|&nbsp; פיתוח ועיצוב Eran Katsav
        </p>
      </div>
    </footer>
  );
}
