import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { RiUnpinFill } from "react-icons/ri";
import { RiPushpin2Fill } from "react-icons/ri";


export default function OneNote(props) {
    const unpinNote = (uid) => {
        alert("unpin" + uid);
    }
    const pinNote = (uid) => {
        alert("pin" + uid);
    };
    return (
        <>
            <div
                className="w-full rounded-lg"
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
                            <RiUnpinFill
                                onClick={() => {
                                    unpinNote(props.datas.noteuid);
                                }}
                                className="w-6 text-xl group-hover:opacity-100 opacity-30 cursor-pointer"
                            />
                        ) : (
                            <RiPushpin2Fill
                                onClick={() => {
                                    pinNote(props.datas.noteuid);
                                }}
                                className="w-6 text-xl group-hover:opacity-100 opacity-30 cursor-pointer"
                            />
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
