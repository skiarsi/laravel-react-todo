import {
    ArchiveBoxIcon,
    BellIcon,
    PencilSquareIcon,
    TagIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";

export default function SideMenu() {
    return (
        <>
            <div className="w-full rounded-xl p-4 px-2">
                <ul className="menu">
                    <li>
                        <a
                            href="#"
                            className="active text-gray-850 text-lg dark:text-gray-200"
                        >
                            <PencilSquareIcon className="w-6" /> Notes
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-850 text-lg dark:text-gray-200"
                        >
                            <BellIcon className="w-6" /> Reminders
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-850 text-lg dark:text-gray-200"
                        >
                            <TagIcon className="w-6" /> Labels
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-850 text-lg dark:text-gray-200"
                        >
                            <ArchiveBoxIcon className="w-6" /> Archive
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-gray-850 text-lg dark:text-gray-200"
                        >
                            <TrashIcon className="w-6" /> Trash
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}
