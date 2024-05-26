import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { Link, router } from "@inertiajs/react";
import { RiUnpinFill } from "react-icons/ri";
import { RiPushpin2Fill } from "react-icons/ri";


export default function OneNote(props) {
    const unpinNote = (uid) => {
        router.post(route("note.unpin", { noteId: uid }));
    }
    const pinNote = (uid) => {
        router.post(route("note.pin", { "noteId": uid }));
    };
    return (
        <>
            <div
                className="w-full rounded-lg hover:shadow-md hover:shadow-slate-400 dark:hover:shadow-none"
                style={{
                    backgroundColor:
                        props.datas.color === "white"
                            ? "#DCDCDC"
                            : props.datas.color,
                }}
            >
                <div className="w-100 group py-5 px-5 relative">
                    <div className="absolute right-2 top-2">
                        {props.datas.pined === 1 ? (
                            <Link
                                preserveScroll
                                href={route("note.unpin", {
                                    noteId: props.datas.noteuid,
                                })}
                            >
                                <RiUnpinFill className="w-6 text-xl group-hover:opacity-100 opacity-30 cursor-pointer" />
                            </Link>
                        ) : (
                            <Link
                                preserveScroll
                                href={route("note.pin", {
                                    noteId: props.datas.noteuid,
                                })}
                            >
                                <RiPushpin2Fill className="w-6 text-xl group-hover:opacity-100 opacity-30 cursor-pointer" />
                            </Link>
                        )}
                    </div>
                    {props.datas.title ? (
                        <p className="font-bold w-100 text-2xl">
                            {props.datas.title}
                        </p>
                    ) : (
                        ""
                    )}
                    {props.datas.text ? (
                        <p className="text-xl">
                            {props.datas.id + " " + props.datas.text}
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="w-full py-2 px-2">
                    <EllipsisVerticalIcon className="w-6" />
                </div>
            </div>
        </>
    );
}
