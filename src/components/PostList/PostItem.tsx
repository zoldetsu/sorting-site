import MyButton from "../../UI/Button/MyButton";
import { useNavigate } from "react-router-dom";

export default function PostItem(props: any) {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong className="post__title">
          {props.posts.id} {props.posts.title}
        </strong>
        <div className="post__body">{props.posts.body}</div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="post__btns">
          <MyButton onClick={() => router(`/posts/${props.posts.id}`)}>
            Открыть
          </MyButton>
        </div>
        <div className="post__btns">
          <MyButton onClick={() => props.remove(props.posts)}>Удалить</MyButton>
        </div>
      </div>
    </div>
  );
}
