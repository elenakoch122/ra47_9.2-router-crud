import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div className="post">
      Страница не найдена. Перейти на <Link to="/">Главную</Link>.
    </div>
  );
}
