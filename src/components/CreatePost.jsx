/* eslint-disable no-unused-vars */
import { useRef } from "react";
import styles from "./CreatePost.module.css";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";
const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const hashTagElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const hashTag = hashTagElement.current.value.split(" ");

    userIdElement.current.value = "";
    postTitleElement.current.value = " ";
    postBodyElement.current.value = " ";
    reactionsElement.current.value = " ";
    hashTagElement.current.value = " ";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: hashTag,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));
  };
  return (
    <>
      <form className={styles.CreatePostContainer} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter here User_Id
          </label>

          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your User_Id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="Enter your Post Title Here.."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="text"
            ref={postBodyElement}
            className="form-control"
            id="body"
            rows={5}
            placeholder="Enter your Post Content Here "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Enter here your Number of Reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="Number of Reactions"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter here HashTags here
          </label>
          <input
            type="text"
            ref={hashTagElement}
            className="form-control"
            id="tags"
            placeholder="Number of Reactions"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
