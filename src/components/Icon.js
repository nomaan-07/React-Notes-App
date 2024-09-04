import sprite from '../assets/sprite.svg';

export default function Icon({ iconName, onClick }) {
  return (
    <svg className="icon" onClick={onClick}>
      <use href={`${sprite}#${iconName}`}></use>
    </svg>
  );
}
