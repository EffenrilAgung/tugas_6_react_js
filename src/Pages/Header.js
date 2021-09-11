import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../Style/Header.css'
class Header extends Component {
    render() {
        return (
            <div id="head">
                <tabel style={{ width: '100%', margin: '40vw' }}>
                    <tbody>
                        <tr>
                            <td>
                                <h2>
                                    <Link to='/' className="link">Home</Link>
                                    |
                                </h2>
                            </td>
                            <td>
                                <h2>
                                    <Link to='/menu-makanan' className="link"> Makanan</Link>
                                    |
                                </h2>
                            </td>
                            <td>
                                <h2>
                                    <Link to='/menu-minuman' className="link"> Minuman</Link>
                                    |
                                </h2>
                            </td>
                            <td>
                                <h2>
                                    <Link to='/kontak' className="link">Kontak</Link>
                                    |
                                </h2>
                            </td>
                        </tr>
                    </tbody>
                </tabel>
            </div >
        )
    }
}

export default Header