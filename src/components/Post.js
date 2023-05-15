import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import PostHeader from "./blocks/PostHeader";

export default function Post({ post }) {
  const navigate = useNavigate();

  return (
    <div className="post posts-item" onClick={() => navigate(`/posts/${post.id}`)}>
      <PostHeader />
      <div className="post__content">{post.content}</div>
      <span className="post__time">{moment(post.created).fromNow()}</span>
    </div>
  );
}
