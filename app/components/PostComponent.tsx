import React from "react";
import { Post } from "../utilitis/interface";

interface Props {
  post: Post;
}

export const PostComponent = ({ post }: Props) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.excerpt}</p>
    </div>
  );
};
