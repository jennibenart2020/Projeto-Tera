import React from "react";
import { useParams } from "react-router-dom";

import Default from "../templates/Default";
import UserBio from "../molecules/UserBio";
import PostListWrapper from "../molecules/PostListWrapper";
import AppLoading from "../organisms/AppLoading";

export default function UserBlog() {
  const { userId } = useParams();

  const [posts, setPosts] = React.useState([]);
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://63cf09718a780ae6e6710dbe.mockapi.io/users/${userId}/posts`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setUser(data[0].user);
        setIsLoading(false);
      });
  }, [userId]);

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <div className="user-blog">
        <UserBio user={user} />
        <PostListWrapper posts={posts} />
      </div>
    </Default>
  );
}
