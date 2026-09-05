import PropTypes from "prop-types";
import AuthorImg from '../../assets/images/profile.png'
const Blog = ({ blog }) => {
    console.log(blog)
    const { title, cover_img,author,time,date,hastags } = blog;
    return (
        <div>
            <img src={cover_img} alt="" className="" />
            <div className="flex justify-between items-center">
                <div className="flex m-2 items-center gap-4">
                    <img src={AuthorImg} alt='' className="w-16" />
                    <div>
                        <h3>{author}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;