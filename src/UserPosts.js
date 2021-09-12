import React from "react";
import { Link, Route, Switch, useRouteMatch, useParams } from "react-router-dom";
import UserPost from "./UserPost";

export const UserPosts = ({ posts = [] }) => {
  const { url } = useRouteMatch();
  const 
  const postLinks = posts.map((post) => (
    <li key={post.id}>
      <Link to={`${url}/${post.id}`} data-testid={`user-post-${post.id}`}>
        {post.title}
      </Link>
    </li>
  ));

  return (
    <div>
      <ul>{postLinks}</ul>
      <div>
        <Switch>
        <Route path={`${url}/:postId`}>
          <UserPost posts={posts} />
        </Route>
          <Route>
            <h1>No post selected...</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default UserPosts;
