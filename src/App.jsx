import MainPage from "./main-page/main-page.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Transactions from "./transactions/transactions.jsx";

function App () {
    return (<BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/transactions" element={<Transactions/>}/>

                {/*// Add new routes there ⏫⏫⏫*/}
                <Route path="/*" element={<MainPage/>}/>
                {/*/* if adress is wrong -> redirect to main page*/}
            </Routes>
        </BrowserRouter>

    );
}

export default App;
