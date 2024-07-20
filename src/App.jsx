// import logo from './logo.svg';
// import './App.css';

import MainPage from "./main-page/main-page.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App () {
    return (<BrowserRouter>
            <Routes>
                {/*<Route path="/dev/*" element={<ComponentsRouter />} />*/}
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
        // <div className="App">
        //   <MainPage/>
        // </div>
    );
}

export default App;
