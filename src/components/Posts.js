import Post from "./Post";

export default function Posts({ list }) {
  return <div className="posts">
    {list.map(p => <Post post={p} key={p.id}/>)}
  </div>;
}