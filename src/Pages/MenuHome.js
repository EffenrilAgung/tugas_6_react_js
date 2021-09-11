import React, { Component } from "react";
import '../Style/kontak.css'
import Header from "./Header";
class MenuHome extends Component {
    render() {
        return (
            <div>
                < Header />
                <br />
                <h1>Selamat Datang Di Halaman Utama Masakan Nusantara</h1>
                <br />
                <div className='image_header' >

                </div>
            </div>

        )
    }
}
export default MenuHome