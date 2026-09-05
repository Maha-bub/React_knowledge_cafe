import PropTypes from "prop-types";
import AuthorImg from '../../assets/images/profile.png'
const Blog = ({ blog }) => {
    console.log(blog)
    const { title, cover_img, author, time, date, hastags } = blog;
    return (
        <div>
            <img src={cover_img} alt="" className="" />
            <div className="flex justify-between items-center">
                <div className="flex items-center ">
                    <img src={AuthorImg} alt='' className="w-14" />
                    <div className="ml-4">
                        <h3>{author}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                    <small>{time} read mins</small>

                </div>
            </div>
            <h2 className="text-2xl">{title}</h2>
            {
                hastags.map((tag, index) =>  <span><a key={index} href="">#{tag}</a></span>)
            }
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;