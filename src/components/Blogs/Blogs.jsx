import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

    const [blogs,setBlogs]= useState([])

    useEffect(()=>{
        fetch('fakedata.json')
        .then(response=>response.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
           {
            blogs.map(b=><Blog key={b.id} blog={b}></Blog>)
           }
        </div>
    );
};

export default Blogs;