import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../PostContext";
import Button from "../ui/Button";

export default function Header() {
  const {newPostText, setNewPostText} = useContext(PostContext);
  const navigate = useNavigate();

  return (
    <form className="header">
      <input className="header__input" type="text" placeholder="Ваш текст..." value={newPostText} onChange={(e) => setNewPostText(e.target.value)} />
      <Button text="Создать пост" callback={() => navigate('/posts/new')} />
    </form>
  );
}