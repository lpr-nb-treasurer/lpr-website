import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default () => {
    return (
        <main>
            <div className="main-content-wrapper">
                <div className="text-center text-white">
                    <h1 className="display-3">
                        <strong>About Us</strong>
                    </h1>
                    <div>
                        &nbsp; &nbsp;&nbsp; &nbsp;Lambda Psi Rho is an Asian-interest, but not Asian-exclusive, organization at the University of Nevada, Reno. We continuously promote brotherhood and diversity, foster leadership, succeed academically, and serve the community.
                    </div>
                    <iframe src="https://www.youtube.com/embed/Ox1xyZEDMPc" title="Lambda Psi Rho Yardshow 2018" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </main>
    );
};
