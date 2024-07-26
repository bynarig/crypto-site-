import React from "react";
import "./navbar.scss";

const Navbar = () => {
    return (<nav>
        <div className="">
            <div className="row justify-content-around unselectable">
                <div className="col-2">
                    <img className="icon" src="/icon.svg" alt=""/>
                </div>
                <div className="col-8 pages unselectable">
                    <div className="row justify-content-end">
                        <a className="first1 col-2" href="/transactions">TRANSACTIONS</a>
                        <a className="col-2" href="/missions">MISSIONS</a> {/*  HERE WE WILL NEED TO PLACE ALL OF OUR PAGE LINKS*/}
                        <a className="col-2" href="/invites">INVITES</a>
                    </div>
                </div>

            </div>
        </div>

    </nav>);
};

export default Navbar;