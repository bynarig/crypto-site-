import React from "react";
import "./footer.scss";

const Footer = () => {
    return (<footer>
        <div className="container text-center">
            <div className="row">
                <div className="col-sm-12 col-md-1">
                    <a>FAQ</a>
                </div>
                <div className=" col-sm-12 col-md-10">
                    <a>TELEGRAM</a>
                </div>
                <div className="col-sm-12 col-md-1">
                    <a>email@gmail.com</a>
                </div>
            </div>
        </div>

    </footer>);
};

export default Footer;