import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useContext } from "react";
import { PostContext } from "../PostContext";

export default function NewPost() {
  const { newPostText, setNewPostText } = useContext(PostContext);
  const navigate = useNavigate();

  const addPost = () => {
    const data = { content: newPostText };
    fetch(process.env.REACT_APP_URL + '/posts', { method: 'POST', body: JSON.stringify(data)})
      .then(() => {
        setNewPostText('');
        navigate('/');
      });
  };

  const cancelPost = () => {
    setNewPostText('');
    navigate('/');
  };

  return (
    <div className="post">
      <div className="post__header">
        <img className="post__header-img" src="https://ex-beton.ru/images/home/client-say/00.jpg" alt="" />
        <p>Iron Man</p>
      </div>

      <div className="post__content">{newPostText}</div>
      <span className="post__close" onClick={cancelPost}>&#10006;</span>
      <div className="post__button-wrapper">
        <Button text="Опубликовать" callback={addPost} />
      </div>
    </div>
  );
}
