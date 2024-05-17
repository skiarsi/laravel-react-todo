import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

export default function OneNote(props) {
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
                <div className="w-100  py-5 px-5 relative">
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
