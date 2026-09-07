import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookMarks }) => {
    return (
        <div className="w-1/3 m-4">
            <h3 >Bookmarks:{bookMarks.length}</h3>
            {
                bookMarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;