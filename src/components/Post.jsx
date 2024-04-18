/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styles from "./Post.module.css";
import { MdDelete } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
import { PostList } from "../store/post-list-store";
import { useContext } from "react";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className={`card ${styles.postcard}`}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((hashtags) => (
          <span
            key={hashtags}
            className={`badge rounded-pill text-bg-primary ${styles.hashTag}`}
          >
            {hashtags}
          </span>
        ))}

        <div
          className={`alert alert-success ${styles.likeContainer}`}
          role="alert"
        >
          <AiTwotoneLike className={styles.likeIcon}></AiTwotoneLike>This Post
          is liked by {post.reactions} people.
        </div>
      </div>
    </div>
  );
};
export default Post;
