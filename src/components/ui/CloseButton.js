export default function CloseButton({ callback = null }) {
  return <span className="post__close" onClick={callback}>&#10006;</span>;
}