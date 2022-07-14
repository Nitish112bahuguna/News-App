import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from './Logo';
export default class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg  text-center navbar-dark bg-dark fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <Logo/>
                        </Link>
                       
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                                <li className="nav-item">
                                    <Link className="nav-link" to="/" style={{ color: "white" }}>General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business" style={{ color: "white" }}> Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment" style={{ color: "white" }}> Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health" style={{ color: "white" }}> Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science" style={{ color: "white" }}>Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports" style={{ color: "white" }}>Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology" style={{ color: "white" }}>Technology</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>


            </div>
        )
    }
}
