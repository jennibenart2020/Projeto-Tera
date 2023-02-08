import React from "react";
import { Link } from "react-router-dom";
import { getFriendlyDate } from "../../helpers/Date";

export default function PostListItem(props) {
    return (
        <div className="card bernat_card">
            <div className="card-header">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mr-2">
                            <img width="45" src={props.avatar} />
                        </div>
                        <div className="ml-2">
                            <Link to="#">
                                <div className="h5 m-0">{props.name}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="text-muted h7 mb-2 d-flex justify-content-center">
                    <i className="fa fa-clock-o"></i>
                    {getFriendlyDate(props.data)}
                </div>

                <p className="card-text p-2 d-flex justify-content-center">
                    {" "}
                    {props.conteudo}{" "}
                </p>
            </div>
            <div className="card-footer">
                <a href="#" className="card-link">
                    <i className="fa fa-gittip"></i>
                    Curtir
                </a>
                <a href="#" className="card-link">
                    <i className="fa fa-mail-forward"></i>
                    Compartilhar
                </a>
            </div>
        </div>
    );
}
