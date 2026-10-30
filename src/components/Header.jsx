import React, { useState, useEffect, useRef } from 'react';
import logo from '../assets/silwasa-white-logo.webp';
import MegaMenu from './MegaMenu';
import { megaMenuData } from '../data/megaMenuData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState(null);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mega menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveMenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const navItems = [
    { name: 'About', defaultHref: '#about' },
    { name: 'Services', defaultHref: '#services' },
    { name: 'Case Studies', defaultHref: '#portfolio' },
    { name: 'Industries', defaultHref: '#services' },
    { name: 'Portfolio', defaultHref: '#portfolio' },
    { name: 'Blog', defaultHref: '#footer' },
  ];

  const handleNavClick = (name) => {
    setActiveMenu((prev) => (prev === name ? null : name));
  };

  const handleItemClick = (href, e) => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileExpandedMenu(null);

    // If anchor link on same page, scroll smoothly
    if (href && href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        if (e) e.preventDefault();
        targetElement.scrollIntoView({ behavior: 'smooth' });
        // Update URL hash without breaking history
        window.history.pushState(null, '', href);
      }
    }
  };

  const toggleMobileAccordion = (name) => {
    setMobileExpandedMenu((prev) => (prev === name ? null : name));
  };

  return (
    <header
      ref={headerRef}
      className="site-header"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: 'var(--e-global-color-4793e6c)',
        boxShadow: isScrolled || activeMenu ? '0 4px 20px rgba(0,0,0,0.85)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '12px',
          paddingBottom: '12px',
        }}
      >
        {/* Logo */}
        <div style={{ flex: '0 0 auto', maxWidth: '160px' }}>
          <a
            href="#hero"
            style={{ display: 'block' }}
            onClick={(e) => handleItemClick('#hero', e)}
          >
            <img
              src={logo}
              alt="Silwasa Logo"
              style={{
                width: '75%',
                height: 'auto',
                display: 'block',
              }}
            />
          </a>
        </div>

        {/* Desktop Navigation Menu with Mega Menu Triggers */}
        <nav
          className="desktop-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          }}
          aria-label="Main Navigation"
        >
          {navItems.map((item) => {
            const isMenuOpen = activeMenu === item.name;
            return (
              <button
                key={item.name}
                type="button"
                className={`desktop-nav-btn ${isMenuOpen ? 'is-active' : ''}`}
                onClick={() => handleNavClick(item.name)}
                aria-expanded={isMenuOpen}
                aria-haspopup="true"
                aria-controls={`mega-menu-panel-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                id={`nav-heading-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <span>{item.name}</span>
                <svg
                  className={`nav-chevron ${isMenuOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div
          className="header-actions"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917070717794"
            target="_blank"
            rel="noopener noreferrer"
            className="header-whatsapp-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 8px',
              border: '1px solid var(--e-global-color-text)',
              borderRadius: '3px',
              boxShadow: '3px 3px 0px 0px #424242',
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--e-global-color-primary)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.boxShadow = '3px 3px 0px 0px #424242';
            }}
          >
            <svg
              viewBox="0 0 448 512"
              fill="#06FF25"
              style={{ width: '18px', height: '18px', flexShrink: 0 }}
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <span>Whatsapp</span>
          </a>

          {/* Get In Touch Button */}
          <a
            href="#contact"
            className="btn-primary header-cta-btn"
            style={{
              fontSize: '16px',
              padding: '10px 16px',
            }}
            onClick={(e) => handleItemClick('#contact', e)}
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile hamburger icon toggle */}
        <button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setActiveMenu(null);
          }}
          className="mobile-toggle"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--e-global-color-secondary)',
            cursor: 'pointer',
            padding: '6px',
          }}
        >
          {mobileMenuOpen ? (
            <svg viewBox="0 0 1000 1000" fill="currentColor" style={{ width: '25px', height: '25px' }}>
              <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 1000 1000" fill="currentColor" style={{ width: '25px', height: '25px' }}>
              <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop / Tablet Mega Menu Dropdown */}
      {activeMenu && (
        <>
          <div
            className="mega-menu-backdrop"
            onClick={() => setActiveMenu(null)}
            aria-hidden="true"
          />
          <MegaMenu
            activeHeading={activeMenu}
            onItemClick={handleItemClick}
          />
        </>
      )}

      {/* Mobile Drawer with Accordion Panels */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          style={{
            backgroundColor: 'var(--e-global-color-4793e6c)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            maxHeight: 'calc(100vh - 70px)',
            overflowY: 'auto',
          }}
        >
          {navItems.map((item) => {
            const isExpanded = mobileExpandedMenu === item.name;
            const menuData = megaMenuData[item.name];

            return (
              <div key={item.name} className="mobile-accordion-group">
                <button
                  type="button"
                  className={`mobile-accordion-header ${isExpanded ? 'is-expanded' : ''}`}
                  onClick={() => toggleMobileAccordion(item.name)}
                  aria-expanded={isExpanded}
                >
                  <span>{item.name}</span>
                  <svg
                    className={`nav-chevron ${isExpanded ? 'rotate-180' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    style={{ width: '16px', height: '16px' }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {isExpanded && menuData && (
                  <div className="mobile-accordion-body">
                    {/* Feature Card Preview on Mobile */}
                    <div
                      style={{
                        padding: '12px 14px',
                        background: 'linear-gradient(145deg, rgba(102, 51, 153, 0.25) 0%, rgba(20, 20, 20, 0.8) 100%)',
                        border: '1px solid rgba(102, 51, 153, 0.3)',
                        borderRadius: '6px',
                        marginBottom: '8px',
                      }}
                    >
                      <span className="mega-menu-badge" style={{ fontSize: '10px', padding: '2px 8px', marginBottom: '8px' }}>
                        {menuData.featureCard.badge}
                      </span>
                      <p style={{ color: 'var(--e-global-color-text)', fontSize: '12px', lineHeight: 1.5, margin: 0 }}>
                        {menuData.featureCard.description}
                      </p>
                    </div>

                    {/* Subcategory items */}
                    {menuData.items.map((subItem) => (
                      <a
                        key={subItem.id}
                        href={subItem.href}
                        className="mobile-mega-item"
                        onClick={(e) => handleItemClick(subItem.href, e)}
                      >
                        <div className="mobile-mega-item-icon">
                          {subItem.icon}
                        </div>
                        <div>
                          <div className="mobile-mega-item-title">{subItem.title}</div>
                          <div className="mobile-mega-item-desc">{subItem.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div style={{ display: 'flex', gap: '10px', marginTop: '16px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
            <a
              href="https://wa.me/917070717794"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                border: '1px solid var(--e-global-color-text)',
                borderRadius: '3px',
                color: '#06FF25',
                fontSize: '14px',
                textDecoration: 'none',
              }}
            >
              WhatsApp
            </a>
            <a
              href="#contact"
              onClick={(e) => handleItemClick('#contact', e)}
              className="btn-primary"
              style={{
                flex: 1,
                textAlign: 'center',
                fontSize: '14px',
                padding: '8px 14px',
              }}
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
