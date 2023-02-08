import React from "react";
import Default from "../templates/Default";
import PostListWrapper from "../molecules/PostListWrapper";
import AppLoading from "../organisms/AppLoading";
import AppSidebar from "../organisms/AppSidebar";
import { useParams } from "react-router-dom";

export default function VerPerfil() {
    const { userId } = useParams();
    const [posts, setPosts] = React.useState([]);
    const [users, setUsers] = React.useState([]);
    const [user, setUser] = React.useState({});
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(
            `https://63d862df74f386d4efd7be6c.mockapi.io/users/${userId}/postagens`
        )
            .then((response) => response.json())
            .then((data) => {
                setPosts(data.sort((a, b) => b.id - a.id));
                setUser(data[0].user);
                const usersArray = data.map((item) => item.user);
                setUsers(usersArray);
                console.log(usersArray);
                setIsLoading(false);
            });
    }, [userId]);

    return isLoading ? (
        <AppLoading />
    ) : (
        <Default>
            <main className="mainContent">
                <div className="container-fluid bernat_topo">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="h5"> Assuntos em alta</div>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="h6 text-muted">
                                            #eleicoes2022
                                        </div>
                                        <div className="h5">3434 assuntos </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="h6 text-muted">
                                            #postmalone
                                        </div>
                                        <div className="h5">2323 assuntos</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="container">
                                <div className="main-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex flex-column align-items-center text-center">
                                                        <img
                                                            src={user.avatar}
                                                            alt="Admin"
                                                            className="rounded-circle p-1 bg-primary"
                                                            width="110"
                                                        />
                                                        <div className="mt-3">
                                                            <h4>{user.name}</h4>
                                                            <p className="text-secondary mb-1">
                                                                {user.trabalho}
                                                            </p>
                                                            <p className="text-muted font-size-sm">
                                                                {user.cidade} -{" "}
                                                                {user.estado}
                                                            </p>
                                                            <button className="btn btn-outline-primary">
                                                                Adicionar
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <PostListWrapper
                                                posts={posts}
                                                users={user}
                                            ></PostListWrapper>
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
        </Default>
    );
}
