import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import MuLoader from "../UI/Loader/MyLoader";
import "../Styles/PostIdPageStyle.css";
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
    <div className={"post__page_wrapper"}>
      <h1 className={"post__page_title"}>
        {" "}
        Вы попали на страницу поста c ID = {params.id}
      </h1>

      {isLoading ? (
        <MuLoader />
      ) : (
        <div className={"post__page_body_title"}>
          {post.id},.. {post.title}
        </div>
      )}
      <h3 style={{ marginTop: "15px" }}>Комментарии</h3>
      {isComLoading ? (
        <MuLoader />
      ) : (
        <div className={"post__comment-wrapper"} style={{ marginTop: "15px" }}>
          {comments.map((comment) => (
            <div className={"post__comment-item"}>
              <h5 className={"comment__email"}>{comment.email}</h5>
              <div className={"comment__body"}>{comment.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
