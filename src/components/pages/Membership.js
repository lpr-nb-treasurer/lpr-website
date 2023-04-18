import React from 'react';

export default () => {
  const title = 'Membership';
  const content =
    'Collegiate membership may be conferred upon any man, regardless of race, ethnicity, national origin, sexual orientation, disability or religion, who is a student of the sheltering institution. A student shall be eligible if he has met the minimum academic performance standards for successful continuation as a student in good standing as defined by the sheltering institution.';
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
