import React from 'react';

export default () => {
  const title = 'Upcoming Events';
  const content = 'None, yet!';
  return (
    <main>
      <div className="main-content-wrapper">
        <div className="text-center text-white">
          <h1 className="display-3">
            <strong>{title}</strong>
          </h1>
          <div className="main-content-paragraph-wrapper">{content}</div>
        </div>
      </div>
    </main>
  );
};
