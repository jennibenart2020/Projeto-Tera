/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import Default from "../templates/Default";
import img_profile from "../../images/placeholders/menino2.png";
import PostListWrapper from "../molecules/PostListWrapper";
import AppLoading from "../organisms/AppLoading";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import AppSidebar from "../organisms/AppSidebar";

export default function Social() {
    const { userId } = useParams();
    const [posts, setPosts] = React.useState([]);
    const [user, setUser] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);

    function getDataFromAPi() {
        fetch(
            `https://63d862df74f386d4efd7be6c.mockapi.io/users/${userId}/postagens`
        )
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.sort((a, b) => b.id - a.id));
                setUser(data[0].user);
                setIsLoading(false);
            });
    }
    React.useEffect(() => {
        getDataFromAPi();
    }, [userId]);

    const [conteudo, setContent] = React.useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        fetch("https://63d862df74f386d4efd7be6c.mockapi.io/users/1/postagens", {
            method: "POST",
            body: JSON.stringify({ conteudo }),
            headers: { "Content-type": "application/json" },
        }).then((result) => {
            if (result.ok == true) {
                Swal.fire(
                    "Sucesso!",
                    "Você criou com sucesso uma nova postagem!",
                    "success"
                );
                getDataFromAPi();
            } else {
                Swal.fire(
                    "Erro",
                    "Você não conseguiu criar uma nova postagem!",
                    "error"
                );
            }
            setContent("");
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
                                            {" "}
                                            Assuntos em alta
                                        </div>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="h6 text-muted">
                                                #eleicoes2022
                                            </div>
                                            <div className="h5">
                                                3434 assuntos{" "}
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
                                <div className="card ">
                                    <div className="card-header">
                                        <ul
                                            className="nav nav-tabs card-header-tabs"
                                            id="myTab"
                                            role="tablist"
                                        >
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    id="posts-tab"
                                                    data-toggle="tab"
                                                    href="#posts"
                                                    role="tab"
                                                    aria-controls="posts"
                                                    aria-selected="true"
                                                >
                                                    Publicar{" "}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <form
                                        onSubmit={handleFormSubmit}
                                        className="card-body"
                                    >
                                        <div
                                            className="tab-content"
                                            id="myTabContent"
                                        >
                                            <div
                                                className="tab-pane fade show active"
                                                id="posts"
                                                role="tabpanel"
                                                aria-labelledby="posts-tab"
                                            >
                                                <div className="form-group">
                                                    <label
                                                        className="sr-only"
                                                        htmlFor="valor"
                                                    >
                                                        post
                                                    </label>
                                                    <textarea
                                                        className="form-control"
                                                        rows="3"
                                                        tabIndex={4}
                                                        name="content"
                                                        id="content"
                                                        value={conteudo}
                                                        onChange={(event) =>
                                                            setContent(
                                                                event.target
                                                                    .value
                                                            )
                                                        }
                                                        placeholder="O que você está pensando?"
                                                    ></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-toolbar justify-content-between">
                                            <div className="btn-group">
                                                <button
                                                    type="submit"
                                                    tabIndex={5}
                                                    className="btn btn-primary"
                                                >
                                                    Compartilhar
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <PostListWrapper
                                    posts={posts}
                                    users={user}
                                ></PostListWrapper>
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
