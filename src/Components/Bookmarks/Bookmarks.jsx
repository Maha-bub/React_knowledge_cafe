import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookMarks }) => {
    return (
        <div className="w-1/3 m-4">
            <h3 >Bookmarks:{bookMarks.length}</h3>
            <div className=" bg-slate-400 p-4 mt-6 rounded-lg">
                {
                    bookMarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Bookmarks;