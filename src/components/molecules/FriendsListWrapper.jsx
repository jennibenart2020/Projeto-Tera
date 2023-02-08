import React from "react";
import FriendsListItem from "./FriendsListItem";

export default function FriendsListWrapper(props) {
    console.log(props);
    return (
        <div className="row">
            {props.friends.map((friend) => (
                <FriendsListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    trabalho={friend.trabalho}
                    cidade={friend.cidade}
                    estado={friend.estado}
                />
            ))}
        </div>
    );
}
