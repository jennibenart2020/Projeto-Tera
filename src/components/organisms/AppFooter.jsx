import React from "react";
import { Link } from "react-router-dom";

export default function AppFooter() {
    return (
        <div>
            <footer className="text-center text-lg-start bg-white text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Legal
                                </h6>
                                <p>
                                    <Link
                                        to="/politica-de-privacidade"
                                        className="text-reset"
                                    >
                                        Política de Privacidade
                                    </Link>
                                </p>
                                <p>
                                    <Link
                                        to="/termos-de-uso"
                                        className="text-reset"
                                    >
                                        Termos de Uso
                                    </Link>
                                </p>
                                <p>
                                    <Link to="/termos" className="text-reset">
                                        Termos de Serviço
                                    </Link>
                                </p>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Contatos
                                </h6>
                                <p>
                                    <i className="fas fa-home me-3 text-secondary"></i>
                                    Av. Paulista, 3000
                                </p>
                                <p>
                                    <i className="fas fa-envelope me-3 text-secondary"></i>
                                    info@bernatmidia.com
                                </p>
                                <p>
                                    <i className="fas fa-phone me-3 text-secondary"></i>
                                    + 55 11 9 5846-7588
                                </p>
                                <p>
                                    <i className="fas fa-print me-3 text-secondary"></i>
                                    + 55 11 2002-4455
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4">
                    © {new Date().getFullYear()} Bernat Midia - Todos os
                    direitos reservados.
                </div>
            </footer>
        </div>
    );
}
