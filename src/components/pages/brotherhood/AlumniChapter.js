import React from "react";

export default () => {
    const title = 'Alumni Chapter';
    const content = 'Most of you have questions on what the details are for the alumni chapter and what does it mean to be one of the charters. Here are some purposes in regards to what is expected of you when you join: • Be a role model to collegiate members and work together in the community (both in Vegas, Reno, or wherever you may be)\
    • Help with networking. If a collegiate member reaches out, provide as many resources as possible\
    • Will be in touch with alumni relations position from active house and have updates on upcoming plans for semester and if they need help with anything\
    • Provide a primary focus to secure active participation by alumni in collegiate chapter activities. If you are not in Reno and are a part of the alumni chapter, assure that at least one member of the alumni chapter attends the collegiate chapter activity\
    • Provide a channel of communication between alumni and brothers of collegiate chapters\
    The main focus of this alumni chapter is for us to be incorporated and able to expand to UC schools. I am in the works of making LPR incorporated and will update the website with corporation status and instructions so that other schools seeking to charter a new chapter has access. As said before, you do not have to be in Reno to be part of the alumni chapter.\
    If you have any other questions, feel free to reach out to me.\
    Stay safe and stay cozy uh ha ha\
    -Alan Cruz;'

    return (
        <main>
            <div className="main-content-wrapper">
                <div className="text-center text-white">
                    <h1 className="display-3">
                        <strong>{title}</strong>
                    </h1>
                    <div className="main-content-paragraph-wrapper">
                        <p>Most of you have questions on what the details are for the alumni chapter and what does it mean to be one of the charters. Here are some purposes in regards to what is expected of you when you join:</p>
                        <ul>
                            <li>Be a role model to collegiate members and work together in the community (both in Vegas, Reno, or wherever you may be)</li>
                            <li>Help with networking. If a collegiate member reaches out, provide as many resources as possible</li>
                            <li>Will be in touch with alumni relations position from active house and have updates on upcoming plans for semester and if they need help with anything</li>
                            <li>Provide a primary focus to secure active participation by alumni in collegiate chapter activities. If you are not in Reno and are a part of the alumni chapter, assure that at least one member of the alumni chapter attends the collegiate chapter activity</li> 
                            <li>Provide a channel of communication between alumni and brothers of collegiate chapters The main focus of this alumni chapter is for us to be incorporated and able to expand to UC schools.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
};
