import React from "react";

import { getFriendlyDate } from "../../helpers/Date";

export default function FriendsListItem(props) {
    return (
        <div className="col-lg-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img
                            src={props.avatar}
                            alt="Admin"
                            className="rounded-circle p-1 bg-primary"
                            width="110"
                        />
                        <div className="mt-3">
                            <h4>{props.name}</h4>
                            <p className="text-secondary mb-1">
                                {props.trabalho}
                            </p>
                            <p className="text-muted font-size-sm">
                                {props.cidade} - {props.estado}
                            </p>
                            <button className="btn btn-outline-primary">
                                Adicionar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
