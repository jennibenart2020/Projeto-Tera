import React from "react";
import { Link } from "react-router-dom";

export default function DrawerMenu(props) {
    return (
        <nav className="navbar navbar-expand-custom navbar-mainbg">
            <a className="navbar-brand navbar-logo" href="#">
                Bernat Midia
            </a>
            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <i className="fas fa-bars text-white"></i>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" tabIndex={1} to="/social/1">
                            Home <span className="sr-only">(atual)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" tabIndex={2} to="/perfil/1">
                            Perfil
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" tabIndex={3} to="/amigos/1">
                            Meus amigos
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
