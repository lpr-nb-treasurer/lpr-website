import React from "react";

export default () => {
    const title = 'About Us';
    const content = 'Lambda Psi Rho is an Asian-interest, but not Asian-exclusive, organization at the University of Nevada, Reno. We continuously promote brotherhood and diversity, foster leadership, succeed academically, and serve the community.';
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
                    <iframe src="https://www.youtube.com/embed/Ox1xyZEDMPc" title="Lambda Psi Rho Yardshow 2018" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </main>
    );
};