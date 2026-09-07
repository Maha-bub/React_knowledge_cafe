import PropTypes from "prop-types";


const Bookmark = ({ bookmark }) => {
    console.log(bookmark)
    return (
        <div>
            <h3>{bookmark.title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    Bookmark: PropTypes.object
}

export default Bookmark;