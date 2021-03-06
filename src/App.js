import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";
import ExploreScreen from "./components/tuiter/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/tuiter/home-screen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";


function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/">
                        <Route index element={<Labs />} />
                        <Route path="labs" exact={true} element={<Labs />} />
                        <Route path="hello" element={<HelloWorld />}/>
                        <Route path="tuiter" element={<Tuiter />}>
                            <Route index element={<HomeScreen />}/>
                            <Route path="home" exact={true} element={<HomeScreen />} />
                            <Route path="explore" element={<ExploreScreen />}/>
                        </Route>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;

