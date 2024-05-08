import {
    CheckCircleIcon,
    ListBulletIcon,
    PhotoIcon,
} from "@heroicons/react/24/outline";
import { router } from "@inertiajs/react";
import { useRef, useState } from "react";

export default function NewNote() {
    const [visibily, setVisibily] = useState(false);
    const [noteTitle, setnoteTitle] = useState("");
    const [textareaVal, setTextAreaVal] = useState("");
    const textareaRef = useRef(null);

    function discareNote() {
        if (noteTitle.length > 0 || textareaVal.length > 0) {
            if (window.confirm("Are you sure you want to discare new note?")) {
                setTextAreaVal("");
                setnoteTitle("");
                setVisibily(false);
            }
        } else {
            setVisibily(false);
        }
    }

    // sumit form
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // new note
    const newNote = (e) => {
        // e.preventDefault();

        router.post(route("home.newnote"));
    };

    return (
        <>
            <div className="w-9/12 mx-auto md:ml-0 md:mr-auto">
                <div className="w-full md:w-10/12 lg:w-8/12 shadow-lg dark:shadow-none bg-white border border-1 border-gray-300 dark:border-gray-600 dark:bg-gray-400 mx-auto mt-7 rounded-md">
                    <form onSubmit={() => handleSubmit()}>
                        <div className="w-full dark:bg-gray-400 p-0">
                            <input
                                value={noteTitle}
                                onChange={(event) => {
                                    setnoteTitle(event.target.value);
                                }}
                                type="text"
                                name=""
                                className="w-full border-0 border-b-2 border-b-gray-600 bg-transparent focus:ring-0 focus:border-b-gray-600"
                                placeholder="title"
                                onClick={() => {
                                    setVisibily(true);
                                }}
                            />
                            <textarea
                                ref={textareaRef}
                                value={textareaVal}
                                rows={2}
                                placeholder="Take a note"
                                onChange={(event) => {
                                    setTextAreaVal(event.target.value);
                                }}
                                className={
                                    (visibily ? "" : "hidden") +
                                    " w-full my-0 border-0 h-auto focus:ring-0 focus:border-0 bg-transparent"
                                }
                            ></textarea>
                        </div>
                        <div className="w-full px-3 flex flex-row py-1">
                            <PhotoIcon className="w-10 avatar rounded-full hover:bg-gray-200 p-2 cursor-pointer" />
                            <CheckCircleIcon className="w-10 avatar rounded-full hover:bg-gray-200 p-2 cursor-pointer" />
                        </div>
                        <div
                            className={
                                (visibily ? "flex" : "hidden") +
                                " w-full py-1 pb-2 ps-3 flex-row "
                            }
                        >
                            <button
                                type="button"
                                onClick={() => {
                                    newNote();
                                }}
                                className="btn btn-link text-md font-normal text-gray-600 dark:bg-gray-100 rounded-sm no-underline btn-sm"
                            >
                                Add Note
                            </button>

                            <button
                                type="button"
                                onClick={() => discareNote()}
                                className="btn btn-link ms-3 text-md font-normal text-red-800 no-underline bg-red-100 rounded-sm btn-sm"
                            >
                                Discare
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    discareNote();
                                }}
                                className="btn btn-link ms-auto me-3 text-md text-gray-600 ml-auto mr-0 font-bold no-underline btn-sm"
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
