import PropTypes from "prop-types";


const Bookmark = ({ bookmark }) => {

    return (
        <div className="bg-slate-300 text-center m-4 p-4 rounded-xl">
            <h3>{bookmark.title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    Bookmark: PropTypes.object
}

export default Bookmark;