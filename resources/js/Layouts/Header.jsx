export default function Header({ authentication, storage }) {
    return (
        <>
            <div className="w-full bg-gray-100 dark:bg-gray-500 flex flex-row">
                <div className="w-3/12 mr-auto ms-o py-2">
                    <div className="w-full flex flex-row">
                        <div className="w-5/12">
                            <img
                                src={storage + "/imgs/" + "todo.png"}
                                className="h-10"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-row-reverse w-2/12 mr-0 ms-auto text-right px-2 py-2.5 cursor-pointer select-none">
                    <div className="avatar  ">
                        <div className="w-10 rounded-full bg-gray-300 ms-2">
                            <img
                                src={
                                    storage +
                                    "/imgs/users/" +
                                    authentication.user.useruid +
                                    "/" +
                                    authentication.user.avatar
                                }
                                alt=""
                            />
                        </div>
                    </div>
                    <p className="text-black dark:text-white text-2xl">
                        {authentication.user.name}
                    </p>
                </div>
            </div>
        </>
    );
}
