import React from "react";
import imgLogin from "../../images/login.png";

import AppLoading from "../organisms/AppLoading";

export default function Home() {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return isLoading ? (
        <AppLoading />
    ) : (
        <section className="vh-100">
            <div className="container py-5 h-100">
                <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img
                            src={imgLogin}
                            className="img-fluid"
                            alt="Imagem Login"
                        />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form id="llogin">
                            <div className="form-outline mb-4">
                                <input
                                    type="email"
                                    id="login_email"
                                    className="form-control form-control-lg"
                                />
                                <label
                                    className="form-label"
                                    htmlFor="login_email"
                                >
                                    Email
                                </label>
                            </div>
                            <div className="form-outline mb-4">
                                <input
                                    type="password"
                                    id="login_senha"
                                    className="form-control form-control-lg"
                                />
                                <label
                                    className="form-label"
                                    htmlFor="login_senha"
                                >
                                    Senha
                                </label>
                            </div>

                            <button
                                type="button"
                                className="btn btn-dark btn-lg btn-block"
                            >
                                Acessar conta{" "}
                            </button>
                            <div
                                style={{
                                    textAlign: "center",
                                    marginTop: "10px",
                                }}
                            >
                                <a href="">Não tem uma conta?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
