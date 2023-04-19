import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import RouterOutlet from './RouterOutlet';
import PageProduct from '../../pages/Product'
import SidebarComponent from '../../components/Layout/SidebarComponent'
import PageUserCart from '../../pages/Basket'
import PageProductDetail from '../../pages/Product/ProductDetail'
export default function RouterDefinition() {

    return (
        <BrowserRouter>
            <SidebarComponent />
            <div className="container__wrap">

            <Routes>
                <Route path="/" element={<RouterOutlet />}>
                <Route path="/product/:id" element={<PageProduct />} />
                <Route path="/cart/:id" element={<PageUserCart />} />
                <Route path="/product/detail/:id" element={<PageProductDetail />} />
                </Route>
            </Routes>
            </div>
        </BrowserRouter>
    )
}
