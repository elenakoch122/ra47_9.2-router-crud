export default function Button({ text, callback = null, color = 'blue' }) {
  let classes;
  color === 'red' ? classes = 'button button_red' : classes = 'button button_blue';

  return <button className={classes} onClick={callback}>{text}</button>;
}