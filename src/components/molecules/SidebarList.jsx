import React from "react";
import { Link } from "react-router-dom";

export default function SidebarList(props) {
    return (
        <div className="proximas">
            <div className="usuarios p-3">
                <div className="row">
                    <div className="col-md-2 col-sm-2">
                        <img
                            src={props.avatar}
                            alt="user"
                            width="100%"
                            className="profile-photo-lg"
                        />
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <h5>
                            <Link
                                to={`/verperfil/${props.userid}`}
                                className="profile-link"
                            >
                                {props.name}
                            </Link>
                        </h5>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <Link
                            to={`/verperfil/${props.userid}`}
                            className="btn btn-primary pull-right"
                        >
                            Ver perfil
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
