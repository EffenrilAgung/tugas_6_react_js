import React, { Component } from "react";
import Header from "./Header";
import DaftarMinuman from "../Lib/Minuman";

class MenuMinuman extends Component {
    render() {
        return (
            <div>
                <Header />
                <h3>Daftar Makanan favorit</h3>
                <table style={{ width: '100%' }}>
                    <tbody>
                        <tr>
                            {DaftarMinuman.map((data, index) => {
                                return (
                                    <td key={index}>
                                        <img src={data.img} alt="Product Minuman" width="150" height="100" />
                                        <p>{data.namaMinuman}</p>
                                        <p>Harga: Rp {data.harga}</p>
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
export default MenuMinuman