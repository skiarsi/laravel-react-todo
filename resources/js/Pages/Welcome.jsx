import { Head } from "@inertiajs/react";
import Header from "@/Layouts/Header";
import SideMenu from "@/Layouts/SideMenu";
import NewNote from "@/Layouts/NewNote";
import AllNotes from "@/Components/AllNotes";
import PinedNotes from "@/Components/PinedNotes";
export default function Welcome({ auth, storage, allNotes, allPinedNotes }) {
    // console.log();
    return (
        <>
            <Head title="ToDo" />
            <Header authentication={auth} storage={storage} />
            <div className="w-full flex flex-row ">
                <div className="hidden md:block w-3/12 py-6 px-5">
                    <SideMenu />
                </div>
                <div className="w-full md:w-9/12 flex flex-col py-6">
                    <NewNote />
                    <div className=" py-8">
                        {allPinedNotes.length > 0 ? (
                            <PinedNotes notes={allPinedNotes} />
                        ) : (
                            ""
                        )}
                        <AllNotes notes={allNotes} />
                    </div>
                </div>
            </div>
        </>
    );
}
