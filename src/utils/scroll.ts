/**
 * Smooth-scrolls to a hash section, compensating for the fixed header height.
 * Passing '#' or '' scrolls back to the very top of the page.
 */
export function scrollToSection(href: string): void {
  if (!href || href === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  if (href.startsWith('#')) {
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    const header = document.querySelector('header');
    const headerHeight = header ? header.getBoundingClientRect().height : 70;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({ top, behavior: 'smooth' });
    return;
  }

  // Regular page navigation (e.g. /aboutus/)
  window.location.href = href;
}
