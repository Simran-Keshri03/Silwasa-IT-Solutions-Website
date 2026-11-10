import React from 'react';
import { megaMenuData } from '../data/megaMenuData';

export default function MegaMenu({ activeHeading, onItemClick }) {
  const menuConfig = megaMenuData[activeHeading];

  if (!menuConfig) return null;

  const { featureCard, items, groups } = menuConfig;

  // Decide columns for flat items: 3 columns if more than 6 items, otherwise 2 columns
  const gridColumns = items && items.length > 6 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)';

  return (
    <div
      id={`mega-menu-panel-${activeHeading.toLowerCase().replace(/\s+/g, '-')}`}
      role="region"
      aria-label={`${activeHeading} navigation menu`}
      className="mega-menu-dropdown-panel"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="container mega-menu-inner">
        {/* Left Feature Card */}
        {featureCard && (
          <div className="mega-menu-feature-card">
            <div>
              <span className="mega-menu-badge">{featureCard.badge}</span>
              <h3 className="mega-menu-feature-title">{featureCard.title}</h3>
              <p className="mega-menu-feature-desc">{featureCard.description}</p>
            </div>
            <a
              href={featureCard.linkHref}
              className="mega-menu-feature-link"
              onClick={(e) => {
                if (onItemClick) onItemClick(featureCard.linkHref, e);
              }}
            >
              <span>{featureCard.linkText}</span>
            </a>
          </div>
        )}

        {/* Right Content: Either Grouped Columns or Flat Grid */}
        {groups ? (
          <div className="mega-menu-groups-container" role="menu">
            {groups.map((group, gIdx) => (
              <div key={gIdx} className="mega-menu-group-column">
                <div className="mega-menu-group-heading">
                  <span>{group.title}</span>
                </div>
                <div className="mega-menu-group-items">
                  {group.items.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="mega-menu-item"
                      role="menuitem"
                      onClick={(e) => {
                        if (onItemClick) onItemClick(item.href, e);
                      }}
                    >
                      <div className="mega-menu-item-icon" aria-hidden="true">
                        {item.icon}
                      </div>
                      <div className="mega-menu-item-content">
                        <span className="mega-menu-item-title">{item.title}</span>
                        <span className="mega-menu-item-desc">{item.description}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          items && (
            <div
              className="mega-menu-items-grid"
              style={{
                gridTemplateColumns: gridColumns,
              }}
              role="menu"
            >
              {items.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="mega-menu-item"
                  role="menuitem"
                  onClick={(e) => {
                    if (onItemClick) onItemClick(item.href, e);
                  }}
                >
                  <div className="mega-menu-item-icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <div className="mega-menu-item-content">
                    <span className="mega-menu-item-title">{item.title}</span>
                    <span className="mega-menu-item-desc">{item.description}</span>
                  </div>
                </a>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}
