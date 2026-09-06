import PropTypes from "prop-types";
const Blog = ({ blogs }) => {
    console.log(blogs)
    return (
        <div>
         
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;