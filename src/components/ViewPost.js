import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "./Button";

export default function ViewPost() {
  const {id} = useParams();
  const [post, setPost] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.REACT_APP_URL + `/posts/${id}`)
      .then(res => res.json())
      .then(json => setPost(json.post));
  }, [id]);

  const onChangeHandler = (e) => {setPost(prev => {
    return { ...prev, content: e.target.value };
  })};

  const deletePost = () => {
    fetch(process.env.REACT_APP_URL + `/posts/${post.id}`, { method: 'DELETE' })
    .then(() => navigate('/'));
  };

  const editPost = () => setIsEdit(true);

  const savePost = () => {
    const data = { content: post.content };
    fetch(process.env.REACT_APP_URL + `/posts/${post.id}`, { method: 'PUT', body: JSON.stringify(data) })
      .then(() => navigate('/'));
  };

  const closePost = () => navigate(-1);

  const cancelEditing = () => setIsEdit(false);

  return isEdit ? (
    <div className="post">
      <div className="post__header">
        <img className="post__header-img" src="https://ex-beton.ru/images/home/client-say/00.jpg" alt="" />
        <p>Iron Man</p>
      </div>

      <textarea className="post__content" value={post.content} onChange={onChangeHandler}></textarea>
      <div className="post__button-wrapper flex-wrapper">
        <Button text="Сохранить" callback={savePost} />
      </div>
      <span className="post__close" onClick={cancelEditing}>&#10006;</span>
    </div>
  ) : (
    <div className="post">
      <div className="post__header">
        <img className="post__header-img" src="https://ex-beton.ru/images/home/client-say/00.jpg" alt="" />
        <p>Iron Man</p>
      </div>

      <div className="post__content">{post.content}</div>
      <span className="post__time">{moment(post.created).fromNow()}</span>
      <div className="post__button-wrapper flex-wrapper">
        <Button text="Редактировать" callback={editPost}/>
        <Button text="Удалить" callback={deletePost} color="red"/>
      </div>
      <span className="post__close" onClick={closePost}>&#10006;</span>
    </div>
  );
}
