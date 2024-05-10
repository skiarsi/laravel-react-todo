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
    const [color, setColor] = useState("gray");
    const [values, setValues] = useState({
        title: "",
        text: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }
    function discareNote() {
        if (noteTitle.length > 0 || textareaVal.length > 0) {
            if (window.confirm("Are you sure you want to discare new note?")) {
                setVisibily(false);
            }
        } else {
            setVisibily(false);
        }
    }

    // sumit form
    const handleSubmit = (e) => {
        router.post(route("home.newnote", values));
    };

    return (
        <>
            <div className="w-9/12 mx-auto md:ml-0 md:mr-auto">
                <div
                    className={
                        "w-full md:w-10/12 lg:w-8/12 shadow-lg dark:shadow-none bg-" +
                        color +
                        "-100 border border-1 border-gray-300 dark:border-gray-600 dark:bg-" +
                        color +
                        "-300 mx-auto mt-7 rounded-md"
                    }
                >
                    <form
                        method="post"
                        onSubmit={(event) => {
                            event.preventDefault();
                            handleSubmit();
                        }}
                    >
                        <div className="w-full p-0">
                            <input
                                value={values.title}
                                onChange={handleChange}
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
                                value={values.text}
                                rows={4}
                                placeholder="Take a note"
                                onChange={handleChange}
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
                                    "bg-" +
                                    color +
                                    "-300 " +
                                    "w-10 avatar rounded-full hover:bg-gray-200 p-2 cursor-pointer"
                                }
                            />
                            <div
                                className={
                                    (colorVisibily ? "flex " : "hidden ") +
                                    "w-11/12 mx-auto bg-white dark:bg-gray-200 pl-1 pr-4 py-0 pt-1 h-11 border border-gray-400 rounded-xl shadow-md"
                                }
                            >
                                <div
                                    onClick={() => {
                                        setColor("gray");
                                    }}
                                    className="avatar cursor-pointer bg-white-300 h-9 w-9 rounded-full border-2 border-gray-700"
                                >
                                    &nbsp;
                                </div>

                                <div
                                    onClick={() => {
                                        setColor("red");
                                    }}
                                    className="avatar cursor-pointer ml-1 bg-red-300 h-9 w-9 rounded-full border-2 border-gray-700"
                                >
                                    &nbsp;
                                </div>
                                <div
                                    onClick={() => {
                                        setColor("blue");
                                    }}
                                    className="avatar cursor-pointer ml-1 bg-blue-300 h-9 w-9 rounded-full border-2 border-gray-700"
                                >
                                    &nbsp;
                                </div>
                                <div
                                    onClick={() => {
                                        setColor("green");
                                    }}
                                    className="avatar cursor-pointer ml-1 bg-green-300 h-9 w-9 rounded-full border-2 border-gray-700"
                                >
                                    &nbsp;
                                </div>
                                <div
                                    onClick={() => {
                                        setColor("yellow");
                                    }}
                                    className="avatar cursor-pointer ml-1 bg-yellow-300 h-9 w-9 rounded-full border-2 border-gray-700"
                                >
                                    &nbsp;
                                </div>
                                <div
                                    onClick={() => {
                                        setColor("purple");
                                    }}
                                    className="avatar cursor-pointer ml-1 bg-purple-300 h-9 w-9 rounded-full border-2 border-gray-700"
                                >
                                    &nbsp;
                                </div>
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
