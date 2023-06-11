import React from 'react';

export default () => {
  const title = 'About Us';
  const content =
    'Lambda Psi Rho is an Asian-interest, but not Asian-exclusive, organization at the University of Nevada, Reno. We continuously promote brotherhood and diversity, foster leadership, succeed academically, and serve the community. We were established on February 11th, 2006, by 11 distinguished gentlemen, and the active house continues their legacy by upholding our pillars of Leadership, Pride, and Respect.';
  return (
    <main>
      <div className="main-content-wrapper">
        <div className="text-center text-white">
          <h1 className="display-3">
            <strong>{title}</strong>
          </h1>
          <div className="main-content-paragraph-wrapper">{content}
          </div>
        </div>
      </div>
    </main>
  );
};
