import { useState } from 'react';
import Icon from './Icon';
import NoteMenuItem from './NoteMenuItem';

export default function Note({
  note,
  onPinNote,
  onDeleteNote,
  onOpenEditForm,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handlePinNote() {
    onPinNote(note.id);
    setIsMenuOpen(false);
  }

  function handleOpenEditNote() {
    onOpenEditForm(note);
    setIsMenuOpen(false);
  }

  return (
    <div className={`note__wrapper ${note.color}`}>
      {isMenuOpen && (
        <>
          <div className="note__overlay">
            <div>
              <Icon iconName="x-mark" onClick={() => setIsMenuOpen(false)} />
            </div>
          </div>

          <div className="note__menu">
            <NoteMenuItem
              iconName={note.pined ? 'bookmark-slash' : 'bookmark'}
              text={note.pined ? 'Unpin' : 'Pin'}
              color="note__menu-item--aquamarine"
              onClick={handlePinNote}
            />
            <NoteMenuItem
              iconName="pencil"
              text="Edit"
              color="note__menu-item--slateblue"
              onClick={handleOpenEditNote}
            />
            <NoteMenuItem
              iconName="trash"
              text="Delete"
              color="note__menu-item--red"
              onClick={() => onDeleteNote(note.id)}
            />
          </div>
        </>
      )}

      <div className="note__header">
        <h5>{note.title ? note.title : 'No title'}</h5>
        <div>
          {note.pined && <Icon iconName="bookmark" />}
          <Icon
            iconName="ellipsis-vertical"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>
      <p>{note.text}</p>
      <span>{note.date.toLocaleString()}</span>
    </div>
  );
}
