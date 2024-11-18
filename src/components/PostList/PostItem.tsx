import MyButton from "../../UI/Button/MyButton";
import { useNavigate } from "react-router-dom";

export default function PostItem(props: any) {
  const router = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.posts.id} {props.posts.title}
        </strong>
        <div>{props.posts.body}</div>
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
