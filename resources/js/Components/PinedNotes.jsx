import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import OneNote from "./OneNote";

export default function PinedNotes({ notes }) {
    return (
        <>
            <p className="font-md text-neutral-800 dark:text-neutral-300 w-11/12 mx-auto pb-5">Pined</p>
            <div className="w-11/12 mx-auto pb-16">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 750: 2, 900: 3, 1200: 4 }}
                >
                    <Masonry gutter="10px">
                        {notes.map((note) => {
                            return <OneNote key={note.id} datas={note} />;
                        })}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </>
    );
}
