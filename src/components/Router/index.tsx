import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "~/components/PageNotFound";
import Dashboard from "~/pages/Dashboard";

const Router: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />}/>

            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </BrowserRouter>
)

export default Router;