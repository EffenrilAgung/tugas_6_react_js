import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from "./App";
import MenuMakanan from './Pages/MenuMakanan'
import MenuMinuman from './Pages/MenuMinuman'
import Kontak from './Pages/Kontak'
function appRouter() {
    return (
        <Router>
            <Route path='/' exact component={App} />
            <Route path='/menu-makanan' component={MenuMakanan} />
            <Route path='/menu-minuman' component={MenuMinuman} />
            <Route path='/kontak' component={Kontak} />
        </Router>
    )
}
export default appRouter