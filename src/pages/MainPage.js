import { useEffect, useState } from "react";
import Header from "../components/Header";
import Posts from "../components/Posts";
// import createRequest from "../createRequest";

export default function MainPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // createRequest('/posts', {method: 'GET'});
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
