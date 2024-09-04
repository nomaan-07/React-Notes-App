import Icon from './Icon';

export default function NoteMenuItem({ iconName, text, onClick, color }) {
  return (
    <div className={`note__menu-item ${color}`} onClick={onClick}>
      <Icon iconName={iconName} />
      {text}
    </div>
  );
}
