import { CiBookmark } from "react-icons/ci";
import { FaSackDollar } from "react-icons/fa6";
import { RiPageSeparator } from "react-icons/ri";
import { IoStar } from "react-icons/io5";
import { IoStarHalfOutline } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";


const Blog = ({blog,handleBookmarks,handMarkAsRead}) => {
    return (
        <div className="mb-24">
            <div className="w-[300px] h-[500px] mx-auto">
                <img className="w-full h-full object-cover" src={blog.image} alt="" />
            </div>
            

            <div>
            <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-3">
                    <img className="w-15 h-15 object-cover rounded-full" src={blog.author_image} alt="" />

                    <div className="">
                        <p className="font-bold">{blog.author}</p>
                        <span>{blog.publish_date}</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                     <p className="text-sm font-light">{blog.reading_time} min read</p>
                     <CiBookmark onClick={()=>handleBookmarks(blog)}></CiBookmark>

                </div>
            </div>


            <h1 className="text-3xl font-semibold my-4">{blog.book_detail}</h1>

            <div>
            <span className="flex items-center gap-3"><FaSackDollar />${blog.price}</span>
            <span className="flex items-center gap-3"><RiPageSeparator />
            {blog.pages} pages</span>
            <span className="flex text-sm"><IoStar />
            <IoStar />
            <IoStar />
            <IoStar />
            {
                blog.id===3 ? <IoStar></IoStar> : blog.id===2 ? <IoStarHalfOutline></IoStarHalfOutline> : <IoStarOutline></IoStarOutline>
            }
            </span>

            <button onClick={()=>handMarkAsRead(blog)} className="underline text-blue-800 my-6">Mark as Read</button>
            </div>
            </div>



        </div>
    );
};

export default Blog;