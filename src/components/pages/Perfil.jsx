import React from "react";
import Default from "../templates/Default";
import AppSidebar from "../organisms/AppSidebar";
import { useParams, Link } from "react-router-dom";
import AppLoading from "../organisms/AppLoading";
import Swal from "sweetalert2";

export default function Perfil() {
    const { userId } = useParams();
    const [user, setUser] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(`https://63d862df74f386d4efd7be6c.mockapi.io/users/${userId}`)
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
                setIsLoading(false);
            });
    }, []);

    const [nome, setNome] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [whatsapp, setWhatsapp] = React.useState("");
    const [linkedin, setLinkedin] = React.useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetch(`https://63d862df74f386d4efd7be6c.mockapi.io/users/${userId}`, {
            method: "POST",
            body: JSON.stringify({ nome, email, whatsapp, linkedin }),
            headers: { "Content-type": "application/json" },
        }).then((result) => {
            if (result.ok == true) {
                Swal.fire(
                    "Sucesso!",
                    "Você editou com sucesso seu perfil!",
                    "success"
                );
            } else {
                Swal.fire(
                    "Erro",
                    "Você não conseguiu editar seu perfil!",
                    "error"
                );
            }
        });
    };

    return isLoading ? (
        <AppLoading />
    ) : (
        <Default>
            <div>
                <main className="mainContent">
                    <div className="container-fluid bernat_topo">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="h5">
                                            Assuntos em alta
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="h6 text-muted">
                                                #eleicoes2022
                                            </div>
                                            <div className="h5">
                                                3434 assuntos
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="h6 text-muted">
                                                #postmalone
                                            </div>
                                            <div className="h5">
                                                2323 assuntos
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="container">
                                    <div className="main-body">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex flex-column align-items-center text-center">
                                                            <img
                                                                src={
                                                                    user.avatar
                                                                }
                                                                alt="Admin"
                                                                className="rounded-circle p-1 bg-primary"
                                                                width="110"
                                                            />
                                                            <div className="mt-3">
                                                                <h4>
                                                                    {user.name}
                                                                </h4>
                                                                <p className="text-secondary mb-1">
                                                                    {
                                                                        user.trabalho
                                                                    }
                                                                </p>
                                                                <p className="text-muted font-size-sm">
                                                                    {
                                                                        user.cidade
                                                                    }
                                                                    -
                                                                    {
                                                                        user.estado
                                                                    }
                                                                </p>
                                                                <Link
                                                                    to={`/social/${userId}`}
                                                                    className="btn btn-primary"
                                                                >
                                                                    Fazer
                                                                    postagem
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-8">
                                                <div className="card">
                                                    <form
                                                        onSubmit={
                                                            handleFormSubmit
                                                        }
                                                        className="card-body"
                                                    >
                                                        <div className="row mb-3">
                                                            <div className="col-sm-3">
                                                                <h6 className="mb-0">
                                                                    Seu nome
                                                                </h6>
                                                            </div>
                                                            <div className="col-sm-9 text-secondary">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setNome(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    value={
                                                                        user.name
                                                                    }
                                                                    tabIndex={4}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-sm-3">
                                                                <h6 className="mb-0">
                                                                    Email
                                                                </h6>
                                                            </div>
                                                            <div className="col-sm-9 text-secondary">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={
                                                                        user.email
                                                                    }
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setEmail(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    tabIndex={5}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-sm-3">
                                                                <h6 className="mb-0">
                                                                    WhatsApp
                                                                </h6>
                                                            </div>
                                                            <div className="col-sm-9 text-secondary">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setWhatsapp(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    value={
                                                                        user.whatsapp
                                                                    }
                                                                    tabIndex={6}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <div className="col-sm-3">
                                                                <h6 className="mb-0">
                                                                    LinkedIn
                                                                </h6>
                                                            </div>
                                                            <div className="col-sm-9 text-secondary">
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    onChange={(
                                                                        event
                                                                    ) =>
                                                                        setLinkedin(
                                                                            event
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    value={
                                                                        user.linkedin
                                                                    }
                                                                    tabIndex={7}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-3"></div>
                                                            <div className="col-sm-9 text-secondary">
                                                                <input
                                                                    type="button"
                                                                    className="btn btn-primary px-4"
                                                                    value="Editar"
                                                                    tabIndex={8}
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <AppSidebar userId={userId} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Default>
    );
}
