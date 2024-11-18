import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import MuLoader from "../UI/Loader/MyLoader";

export default function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const responce = await PostService.getById(params.id);
    setPost(responce.data);
  });

  const [fetchComments, isComLoading, comError] = useFetching(async () => {
    const responce = await PostService.getCommentsById(params.id);
    setComments(responce.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1> Вы попали на страницу поста c ID = {params.id}</h1>

      {isLoading ? (
        <MuLoader />
      ) : (
        <div>
          {post.id},.. {post.title}
        </div>
      )}
      <h1 style={{ marginTop: "15px" }}>Комментарии</h1>
      {isComLoading ? (
        <MuLoader />
      ) : (
        <div style={{ marginTop: "15px" }}>
          {comments.map((comment) => (
            <div style={{ marginTop: "10px" }}>
              <h5>{comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
