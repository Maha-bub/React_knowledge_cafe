import PropTypes from "prop-types";
import AuthorImg from '../../assets/images/profile.png'
import { IoBookmarks } from "react-icons/io5";

const Blog = ({ blog,handleBookMarks }) => {
    console.log(blog)
    const { title, cover_img, author, time, date, hastags } = blog;
    return (
        <div className="mb-4">
            <img src={cover_img} alt="" className="w-full rounded-md h-[400px]" />
            <div className="flex justify-between items-center">
                <div className="flex items-center my-4">
                    <img src={AuthorImg} alt='' className="w-14" />
                    <div className="ml-4">
                        <h3>{author}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div className="flex items-center justify-items-center gap-2">
                    <small>{time} mins read </small>
                    <button onClick={handleBookMarks}><IoBookmarks /></button>

                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            {
                hastags.map((tag, index) => <span><a className="ml-2" key={index} href="">#{tag}</a></span>)
            }
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;