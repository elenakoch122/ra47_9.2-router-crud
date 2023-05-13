import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";

export default function EditPost() {
  const {id} = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.REACT_APP_URL + `/posts/${id}`)
      .then(res => res.json())
      .then(json => setPost(json.post));
  }, [id]);

  const editPost = () => {
    // изменить кнопку Редактировать на Сохранить, PUT-request
  };

  const deletePost = () => {
    fetch(process.env.REACT_APP_URL + `/posts/${post.id}`, { method: 'DELETE' })
      .then(() => navigate('/'));
  };

  return (
    <div className="post">
      <div className="post__header">
        <img className="post__header-img" src="https://ex-beton.ru/images/home/client-say/00.jpg" alt="" />
        <p>Iron Man</p>
      </div>

      <div className="post__content">{post.content}</div>
      <span className="post__time">{moment(post.created).fromNow()}</span>
      <div className="post__button-wrapper flex-wrapper">
        <Button text="Редактировать" callback={editPost} />
        <Button text="Удалить" callback={deletePost} color="red"/>
      </div>
    </div>
  );
}
