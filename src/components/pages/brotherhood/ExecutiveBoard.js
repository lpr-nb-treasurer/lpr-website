import React from "react";

export default () => {
    const title = 'Executive Board';
    return (
        <main>
            <div className="main-content-wrapper">
                <div className="text-center text-white">
                    <h1 className="display-3">
                        <strong>{title}</strong>
                    </h1>
                    <div className="main-content-paragraph-wrapper">
                        <img src="/lpr-website/executive-board.jpg"></img>
                    </div>
                </div>
            </div>
        </main>
    );
};
