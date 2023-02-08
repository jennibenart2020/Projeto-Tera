import React from "react";
import Default from "../templates/Default";
import AppLoading from "../organisms/AppLoading";
import FriendsListWrapper from "../molecules/FriendsListWrapper";
import AppSidebar from "../organisms/AppSidebar";

export default function Perfil() {
    const [friends, setFriends] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch(`https://63d862df74f386d4efd7be6c.mockapi.io/api/v1/users`)
            .then((response) => response.json())
            .then((data) => {
                setFriends(data);
                setIsLoading(false);
            });
    }, []);

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
                                <div className="container">
                                    <div className="main-body friendsList">
                                        <FriendsListWrapper friends={friends} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <AppSidebar userId={1} />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </Default>
    );
}
