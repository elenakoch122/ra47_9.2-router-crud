import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

export default function Post({ post }) {
  const navigate = useNavigate();
  return (
    <div className="post posts-item" onClick={() => navigate(`/posts/${post.id}`)}>
      <div className="post__header">
        <img className="post__header-img" src="https://ex-beton.ru/images/home/client-say/00.jpg" alt="" />
        <p>Iron Man</p>
      </div>

      <div className="post__content">{post.content}</div>
      <span className="post__time">{moment(post.created).fromNow()}</span>
    </div>
  );
}
