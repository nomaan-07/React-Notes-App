import { useState } from 'react';
import AddNote from './AddNote';
import Notes from './Notes';
import FormAddNote from './FormAddNote';

export default function App() {
  const [notes, setNotes] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [selectedColor, setSelectedColor] = useState('whitesmoke');
  const [editedNote, setEditedNote] = useState(null);

  const sortedNotes = notes.slice().sort((a, b) => b.pined - a.pined);

  function handleFormToggle() {
    setIsFormOpen(!isFormOpen);
    setTitle('');
    setText('');
    setSelectedColor('whitesmoke');
  }

  function handleAddNote(note) {
    setNotes((notes) => [...notes, note]);
    handleFormToggle();
  }

  function handlePinNote(id) {
    setNotes((notes) =>
      notes.map((note) =>
        note.id === id ? { ...note, pined: !note.pined } : note
      )
    );
  }

  function handleDeleteNote(id) {
    const confirmed = window.confirm('Are you sure?');
    if (!confirmed) return;
    setNotes((notes) => notes.filter((note) => note.id !== id));
  }

  function handleOpenEditForm(note) {
    setEditedNote(note);
    setTitle(note.title);
    setText(note.text);
    setSelectedColor(note.color);
    setIsFormOpen(true);
  }

  function handleEditNote(editedNote) {
    setNotes((notes) =>
      notes.map((note) => (note.id === editedNote.id ? editedNote : note))
    );

    setEditedNote(null);
    handleFormToggle();
  }

  return (
    <div className="container">
      <AddNote
        notes={notes}
        isFormOpen={isFormOpen}
        onFormOpen={handleFormToggle}
      />
      <Notes
        notes={sortedNotes}
        onPinNote={handlePinNote}
        onDeleteNote={handleDeleteNote}
        onOpenEditForm={handleOpenEditForm}
      />
      {isFormOpen && (
        <div className="form__wrapper">
          <FormAddNote
            title={title}
            text={text}
            selectedColor={selectedColor}
            editedNote={editedNote}
            onSetTitle={setTitle}
            onSetText={setText}
            onSelectColor={setSelectedColor}
            onAddNote={handleAddNote}
            onEditNote={handleEditNote}
          />
        </div>
      )}
    </div>
  );
}
