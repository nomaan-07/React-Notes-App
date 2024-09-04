import Button from './Button';
import Icon from './Icon';

export default function AddNote({ notes, isFormOpen, onFormOpen }) {
  return (
    <>
      <div className="add-note">
        <Button
          onClick={onFormOpen}
          className={isFormOpen ? 'open-form-btn red' : 'aquamarine'}
        >
          <Icon iconName="plus" />
        </Button>
        {isFormOpen ? (
          <p>Close</p>
        ) : notes.length ? (
          <p>Add a new Note</p>
        ) : (
          <p>Add your first note</p>
        )}
      </div>
    </>
  );
}
