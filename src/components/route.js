import React, { BrowserRouter, Routes, Route }  from "react";
import Footer from "./footer";
import BodyUseState from "./usestate";
import Header from "./header";

const BodyRoute = ()=> {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="header" element={<Header/>}>Header</Route>
                <Route path="bodyusestate" element={<BodyUseState/>}>BodyUseState</Route>
                <Route path="footer" element={<Footer/>}>Footer</Route>
            </Routes>
        </BrowserRouter>
    );
};

export default BodyRoute;