import React from "react";
import PostListItem from "./PostListItem";

export default function PostListWrapper(props) {
    return (
        <div className="postagem">
            {props.posts.map((post) => (
                <PostListItem
                    key={post.id}
                    conteudo={post.conteudo}
                    data={post.data}
                    name={props.users.name}
                    avatar={props.users.avatar}
                />
            ))}
        </div>
    );
}
