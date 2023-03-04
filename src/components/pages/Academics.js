import React from "react";

export default () => {
    const title = 'Academics';
    const content = 'The brothers of Lambda Psi Rho prides themselves in high academic standards. Having received the most improved and highest academic awards from the Multicultural Greek Council in 2012, the brothers of Lambda Psi Rho strives to maintain 3.0 GPA. In addition, the brotherhood requires a minimum 2.5 GPA to rush. Throughout the new member process, the fraternity pushes for academic excellence and implements a 2.75 GPA requirement to become a brother. Upon joining the fraternity, Lambda Psi Rho continually promotes academic success by having strict GPA guidelines. Furthermore, the brothers implement a mentor system to help new members with academics. Lambda Psi Rho is academically diverse with brothers in nearly every major on campus.';
    return (
        <main>
            <div className="main-content-wrapper">
                <div className="text-center text-white">
                    <h1 className="display-3">
                        <strong>{title}</strong>
                    </h1>
                    <div className="main-content-paragraph-wrapper">
                        {content}
                    </div>
                </div>
            </div>
        </main>
    );
};
