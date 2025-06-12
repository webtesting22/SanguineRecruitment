import React from 'react';
import './SectionHero.css';

const SectionHero = ({
  title,
  description,
  primaryBtnText,
  primaryBtnAction,
  secondaryBtnText,
  secondaryBtnAction,
  imageUrl
}) => {
  return (
    <section className="section-hero">
      <div className="section-hero-content">
        <h1 className="section-hero-title">{title}</h1>
        <p className="section-hero-description">{description}</p>
        {/* <div className="section-hero-buttons">
          {primaryBtnText && (
            <button className="section-hero-btn primary" onClick={primaryBtnAction}>
              {primaryBtnText}
            </button>
          )}
          {secondaryBtnText && (
            <button className="section-hero-btn secondary" onClick={secondaryBtnAction}>
              {secondaryBtnText}
            </button>
          )}
        </div> */}
      </div>
      {imageUrl && (
        <div className="section-hero-image-wrapper">
          <img src={imageUrl} alt="Section visual" className="section-hero-image" />
        </div>
      )}
    </section>
  );
};

export default SectionHero; 