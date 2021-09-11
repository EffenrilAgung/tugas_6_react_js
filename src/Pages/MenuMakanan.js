import React, { Component } from "react";
import Header from "./Header";
import DaftarMakanan from "../Lib/Makanan";

class MenuMakanan extends Component {
    render() {
        return (
            <div>
                <Header />
                <h4>Daftar Makanan Favourite</h4>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((data, index) => {
                                return (
                                    <td key={index}>
                                        <img src={data.img} width="150" height='100' alt='Product Makanan' />
                                        <p>{data.namaPesanan}</p>
                                        <p>Harga : Rp {data.harga}</p>
                                    </td>
                                )
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default MenuMakanan