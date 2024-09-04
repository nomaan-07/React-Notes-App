export default function Color({ color, onSelectColor }) {
  function handleOnClick() {
    onSelectColor(color);
  }

  return <div onClick={handleOnClick} className={color}></div>;
}
