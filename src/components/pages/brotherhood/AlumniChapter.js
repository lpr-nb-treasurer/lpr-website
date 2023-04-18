import React from 'react';
import '../../../css/AlumniChapter.css';

export default () => {
  const title = 'Alumni Chapter';

  return (
    <main>
      <div className="main-content-wrapper">
        <div className="text-center text-white">
          <h1 className="display-3">
            <strong>{title}</strong>
          </h1>
          <div className="main-content-paragraph-wrapper" id="alumni-list">
            <p>
              Most of you have questions on what the details are for the alumni
              chapter and what does it mean to be one of the charters. Here are
              some purposes in regards to what is expected of you when you join:
            </p>
            <ul class="alumni-chapter-list">
              <li>
                Be a role model to collegiate members and work together in the
                community (both in Vegas, Reno, or wherever you may be)
              </li>
              <li>
                Help with networking. If a collegiate member reaches out,
                provide as many resources as possible
              </li>
              <li>
                Will be in touch with alumni relations position from active
                house and have updates on upcoming plans for semester and if
                they need help with anything
              </li>
              <li>
                Provide a primary focus to secure active participation by alumni
                in collegiate chapter activities. If you are not in Reno and are
                a part of the alumni chapter, assure that at least one member of
                the alumni chapter attends the collegiate chapter activity
              </li>
              <li>
                Provide a channel of communication between alumni and brothers
                of collegiate chapters The main focus of this alumni chapter is
                for us to be incorporated and able to expand to UC schools.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
