import "./transactions.scss";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";

function Transactions () {
    return (<>
        <Navbar/>
        <div className="transactions-page">
            <div className="row justify-content-center balance-divs">
                <div className="balance col-1 col-sm-3 col-md-7 col-lg-9">
                    BALANCE 235.02 TON
                </div>
                <button className="col-3 col-sm-5 col-md-4 col-lg-2">
                    SEND
                </button>
            </div>
            <div className="row justify-content-center balance-divs ">

                <button className="col-4 boost-button">
                    boost
                </button>
            </div>
            <div className="transaction-history">
                <h1>Transaction history</h1>
            </div>
            <div className="row justify-content-center ">
                <div className="row justify-content-around table-headers">
                    <div className="col-3">
                        Date
                    </div>
                    <div className="col-2">
                        Coin
                    </div>
                    <div className="col-2">
                        Sum
                    </div>
                    <div className="col-2">
                        Type
                    </div>
                    <div className="col-2">
                        Status
                    </div>
                </div>
            </div>
            <div className="row justify-content-center ">
                <div className="row justify-content-around table-contents">
                    <div className="col-3 table-contents-col">
                        2024-28-02
                        <p>6:22:28</p>
                    </div>
                    <div className="col-2 table-contents-col">
                        <img src="/icon.svg"/>
                    </div>
                    <div className="col-2 table-contents-col">
                        217.2
                    </div>
                    <div className="col-2 table-contents-col">
                        Receive
                    </div>
                    <div className="col-2 table-contents-col">
                        <img src="/status-img/approved.svg"/>
                    </div>
                </div>
            </div>

        </div>

        <Footer/>
    </>);
}

export default Transactions;