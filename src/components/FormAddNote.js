import Button from './Button';
import Color from './Color';

export default function FormAddNote({
  title,
  text,
  selectedColor,
  editedNote,
  onSetTitle,
  onSetText,
  onSelectColor,
  onAddNote,
  onEditNote,
}) {
  const colors = [
    'white',
    'whitesmoke',
    'aquamarine',
    'hotpink',
    'gold',
    'slateblue',
    'navy',
    'chocolate',
    'red',
    'black',
  ];

  function handleSubmit(e) {
    e.preventDefault();
    if (!text) return;

    if (editedNote) {
      onEditNote({ ...editedNote, color: selectedColor, text, title });
      return;
    }

    const note = {
      id: crypto.randomUUID(),
      text: text,
      color: selectedColor,
      title,
      pined: false,
      date: new Date(),
    };

    onAddNote(note);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="title"
        className={selectedColor}
        value={title}
        onChange={(e) =>
          onSetTitle(e.target.value.length < 16 ? e.target.value : title)
        }
      />
      <textarea
        placeholder="Type your note ..."
        className={selectedColor}
        value={text}
        onChange={(e) => onSetText(e.target.value)}
      ></textarea>
      <div className="colors-wrapper">
        {colors.map((color) => (
          <Color
            color={color}
            key={color}
            selectedColor={selectedColor}
            onSelectColor={onSelectColor}
          />
        ))}
      </div>
      <Button className={'form__btn aquamarine'}>
        {editedNote ? 'Edit Note' : 'Add Note'}
      </Button>
    </form>
  );
}
