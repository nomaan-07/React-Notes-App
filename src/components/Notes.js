import Note from './Note';

export default function Notes({
  notes,
  onPinNote,
  onDeleteNote,
  onOpenEditForm,
}) {
  if (!notes.length) return;

  return (
    <div className="notes__wrapper">
      {notes.map((note) => (
        <Note
          note={note}
          onPinNote={onPinNote}
          onDeleteNote={onDeleteNote}
          key={note.id}
          onOpenEditForm={onOpenEditForm}
        />
      ))}
    </div>
  );
}
