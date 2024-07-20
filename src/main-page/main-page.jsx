import "./main-page.scss";
import Navbar from "../navbar/navbar.jsx";
import Footer from "../footer/footer.jsx";

function MainWindow () {
    return (<>
        <Navbar/>
        <div className="main-page">
            <div className="row justify-content-md-center balance-divs">
                <div className="balance col-1 col-sm-3 col-md-7 col-lg-9">
                    BALANCE 235.02 TON
                </div>
                <button className="col-3 col-sm-5 col-md-4 col-lg-2">
                    SEND
                </button>
            </div>
            <div className="row justify-content-md-center">
                <img className=" col-12 negr-work" src="/negr-work.gif" alt=""/>
            </div>
            <div className="row justify-content-center d-flex align-items-center">
                <div className="col-8 col-sm-11  col-md-4 col-lg-3 text-center mined-coins">
                    31.098361
                </div>
                <img className="spinning-coin col-2 col-sm-1 col-md-2 col-lg-1" src="/spinning-coin.gif" alt=""/>
            </div>
            <div className="row justify-content-center d-flex align-items-center">
                <div className="col-8 col-sm-11  col-md-4 col-lg-3 text-center lightning-tons">
                    10.0 TON
                </div>
                <img className="col-2 col-sm-1 col-md-2 col-lg-1 lightning" src="/lightning.png" alt=""/>
            </div>
            <div className="row justify-content-evenly d-flex align-items-center action-buttons">
                <button className="col-5 col-sm-4  col-md-4 col-lg-1 text-center">
                    CLAIM
                </button>
                <button className="col-5 col-sm-4  col-md-4 col-lg-1 text-center">
                    BOOST
                </button>
            </div>


        </div>
        <Footer/>
    </>);
}

export default MainWindow;
