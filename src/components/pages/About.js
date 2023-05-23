import React from 'react';

export default () => {
  const title = 'About Us';
  const content =
    'Lambda Psi Rho is an Asian-interest, but not Asian-exclusive, organization at the University of Nevada, Reno. We continuously promote brotherhood and diversity, foster leadership, succeed academically, and serve the community.';
  return (
    <main>
      <div className="main-content-wrapper">
        <h1 className="about-us-title">About Us</h1>
        <div className="main-content-paragraph-wrapper">{content}</div>
        <div id="about-page-video">
          <iframe
            src="https://www.youtube.com/embed/Ox1xyZEDMPc"
            height="422"
            title="Lambda Psi Rho Yardshow 2018"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className='about-us-youtube'
          ></iframe>
        </div>
      </div>
    </main>
  );
};
