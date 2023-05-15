import { useEffect, useState } from "react";
import Header from "./blocks/Header";
import Posts from "./blocks/Posts";

export default function MainPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_URL + '/posts')
    .then(res => res.json())
    .then(json => setList(json));
  }, []);

  return (
    <>
      <Header />
      <Posts list={list}/>
    </>
  );
}
