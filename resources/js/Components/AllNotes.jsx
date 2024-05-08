export default function AllNotes({ notes }) {
    return (
        <>
            {notes.map((note) => {
                return <p>{note.title}</p>;
            })}
        </>
    );
}
