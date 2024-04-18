/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import EmptyListPostMessage from "./EmptyListPostMessage";
import LoadingSpinner from "./LoadingSpinner";
import { PostList as PostListData } from "../store/post-list-store";

const PostList = () => {
  const { postList, addInitailPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitailPosts(data.posts);
        setFetching(false);
      });
  }, []);

  // const [dataFetched, setDataFetched] = useState(false);

  // if (!dataFetched) {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitailPosts(data.posts);
  //     });
  //   setDataFetched(true);
  // }

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <EmptyListPostMessage></EmptyListPostMessage>
      )}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
