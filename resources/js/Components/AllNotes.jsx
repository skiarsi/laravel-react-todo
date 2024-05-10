export default function AllNotes({ notes }) {
    return (
        <>
            {notes.map((note) => {
                return <p key={note.id}>{note.title}</p>;
            })}
        </>
    );
}
