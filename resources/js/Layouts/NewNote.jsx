import ColorChooserPanel from "@/Components/ColorChooserPanel";
import {
    CheckCircleIcon,
    PhotoIcon,
    SwatchIcon,
} from "@heroicons/react/24/outline";
import { router } from "@inertiajs/react";
import { useState } from "react";

export default function NewNote() {
    const [visibily, setVisibily] = useState(false);
    const [colorVisibily, setColorVisibily] = useState(false);
    const [color, setColor] = useState("#DCDCDC");
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    function discareNote() {
        if (title.length > 0 || text.length > 0) {
            if (window.confirm("Are you sure you want to discare new note?")) {
                setVisibily(false);
                // set every thing as default
                setTitle("");
                setText("");
                setColor("#DCDCDC");
            }
        } else {
            setVisibily(false);
        }
    }

    // sumit form
    const handleSubmit = (e) => {
        if (title.length > 0 || text.length > 0) {
            // send data to server
            const datas = {
                color: color,
                text: text,
                title: title
            };
            router.post(route("home.newnote", datas));
            setVisibily(false);
            // set every thing as default
            setTitle("");
            setText("");
            setColor("#DCDCDC");
        } else {
            alert("Not any datas for new note");
        }
    };

    return (
        <>
            <div className="w-10/12 md:w-9/12 lg:w-7/12 mx-auto ">
                <div
                    style={{ backgroundColor: color }}
                    className={
                        " w-full shadow-lg dark:shadow-none border border-1 border-gray-300 dark:border-gray-600 mx-auto mt-7 rounded-md"
                    }
                >
                    <form
                        method="post"
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <input
                            type="hidden"
                            name="inpcolor"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                        <div className="w-full p-0 ">
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                id="title"
                                type="text"
                                name="title"
                                className="w-full border-0 border-b-2 border-b-gray-600 bg-transparent focus:ring-0 focus:border-b-gray-600"
                                placeholder="title"
                                onClick={() => {
                                    setVisibily(true);
                                }}
                            />
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                rows={4}
                                placeholder="Take a note"
                                id="text"
                                name="text"
                                className={
                                    (visibily ? "" : "hidden") +
                                    " w-full my-0 border-0 h-auto focus:ring-0 focus:border-0 bg-transparent"
                                }
                            ></textarea>
                        </div>
                        <div className="relative w-full px-3 flex flex-row py-1">
                            <PhotoIcon className="w-10 avatar rounded-full hover:bg-gray-200 p-2 cursor-pointer" />
                            <CheckCircleIcon className="w-10 avatar rounded-full hover:bg-gray-200 p-2 cursor-pointer" />
                            <SwatchIcon
                                onClick={() => {
                                    setColorVisibily(true);
                                }}
                                className={
                                    (colorVisibily ? "hidden " : "flex ") +
                                    "w-10 avatar rounded-full hover:bg-gray-200 p-2 cursor-pointer"
                                }
                            />
                            <div
                                className={
                                    (colorVisibily ? "flex " : "hidden ") +
                                    "w-auto gap-1 ml-0 mr-auto bg-gray-100  pl-2 pr-2 py-0 pt-1.5 h-10 border border-gray-400 rounded-lg shadow-md"
                                }
                            >
                                <ColorChooserPanel
                                    click={(event) => {
                                        setColor(event);
                                        setColorVisibily(false);
                                    }}
                                    class="avatar cursor-pointer bg-white-300 h-7 w-7 rounded-full border-2 border-gray-700"
                                />
                            </div>
                        </div>
                        <div
                            className={
                                (visibily ? "flex" : "hidden") +
                                " w-full py-1 pb-2 ps-3 flex-row "
                            }
                        >
                            <button
                                type="submit"
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
